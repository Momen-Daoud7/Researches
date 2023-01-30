<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Models\Folder;
use Illuminate\Http\Request;
use App\Models\Subfolder;

class SubfolderController extends Controller
{
    //
    public function index(Request $request)
    {
        $subfolder = Subfolder::all();

        return response([
            'success' => true,
            "subfolders" => $subfolder
        ],200);
    }

    public function show(Request $request,$id)
    {
        $subfolder = Subfolder::find($id);

        if(!$subfolder) {
            return response([
                'success' => false,
                "message" => "folder not found"
            ],404);            
        }

        return response([
            'success' => true,
            "folder" => $subfolder
        ],200);
    }

    public function store(Request $request)
    {
        // validattion
        $fields = $request->validate([
            "name" => "required|string",
            "folder_id" => "numeric",
            "parent_id" => "numeric"
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

        if(array_key_exists('parent_id',$fields)) {
            $parent = Subfolder::find($fields['parent_id']);
        
            if(!$parent) {
                return response([
                    'success' => false,
                    "message" => "parent not found"
                ],404);
            }
        }



        $subfolder = Subfolder::create($fields);

        return response([
            'success' => true,
            "subfolder" => $subfolder
        ],201);
    }

    public function update(Request $request,$id)
    {
        // Find client
        $subfolder = Subfolder::find($id);
        
        if(!$subfolder) {
            return response([
                'success' => false,
                "message" => "folder not found"
            ],404);            
        }

        // validattion
        $fields = $request->validate([
            "name" => "required|string",
        ]);

        $subfolder->update($fields);

        return response([
            'success' => true,
            "folder" => $subfolder
        ],201);
    }

    public function destroy($id)
    {
        // Find product
        $subfolder = Subfolder::find($id);
        
        if(!$subfolder) {
            return response([
                'success' => false,
                "message" => "folder not found"
            ],404);            
        }
        
        Subfolder::destroy($id);
        
        return response([
            'success' => true,
            "message" => "folder deleted"
        ],201);
    }

    public function getFiles($id) {
        $subfolder = Subfolder::find($id);
        
        if(!$subfolder) {
            return response([
                'success' => false,
                "message" => "folder not found"
            ],404);            
        }
        
        $files = File::where("subfolder_id",$id)->get();

        return response([
            'success' => true,
            "files" => $files
        ],200);
    }

    public function getFolders($id) {
        $subfolder = Subfolder::find($id);
        
        if(!$subfolder) {
            return response([
                'success' => false,
                "message" => "folder not found"
            ],404);            
        }
        
        $folders = Subfolder::where("parent_id",$id)->get();

        return response([
            'success' => true,
            "folders" => $folders
        ],200);
    }

}
