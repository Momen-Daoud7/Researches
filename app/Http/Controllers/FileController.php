<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\File;
use App\Models\Folder;
use App\Models\Subfolder;
use Illuminate\Validation\Rules\Exists;

class FileController extends Controller
{
    public function index(Request $request)
    {
        $file = File::all();

        return response([
            'success' => true,
            "files" => $file
        ],200);
    }

    public function show(Request $request,$id)
    {
        $file = File::find($id);

        if(!$file) {
            return response([
                'success' => false,
                "message" => "file not found"
            ],404);            
        }

        return response([
            'success' => true,
            "file" => $file
        ],200);
    }

    public function store(Request $request)
    {
        // validattion
        $fields = $request->validate([
            "name" => "required|string",
            "text" => "required|string",
            "folder_id" => "numeric",
            "subfolder_id" => "numeric",
        ]);

        if(array_key_exists('folder_id',$fields)) {
            $folder = Folder::find($fields['folder_id']);
            
            if(!$folder) {
                return response([
                    'success' => false,
                    "message" => "folder not found"
                ],404);            
            }
        }

        if(array_key_exists('subfolder_id',$fields)) {
            $subfolder = Subfolder::find($fields['subfolder_id']);
        
            if(!$subfolder) {
                return response([
                    'success' => false,
                    "message" => "subfolder not found"
                ],404);
            }
        }



        $file = File::create($fields);

        return response([
            'success' => true,
            "file" => $file
        ],201);
    }

    public function update(Request $request,$id)
    {
        // Find client
        $file = File::find($id);
        
        if(!$file) {
            return response([
                'success' => false,
                "message" => "file not found"
            ],404);            
        }

        // validattion
        $fields = $request->validate([
            "name" => "string",
            "text" => "string",
            "folder_id" => "numeric",
            "subfolder_id" => "numeric",
        ]);

        $file->update($fields);

        return response([
            'success' => true,
            "file" => $file
        ],201);
    }

    public function destroy($id)
    {
        // Find product
        $file = File::find($id);
        
        if(!$file) {
            return response([
                'success' => false,
                "message" => "file not found"
            ],404);            
        }
        
        File::destroy($id);
        
        return response([
            'success' => true,
            "message" => "file deleted"
        ],201);
    }

}
