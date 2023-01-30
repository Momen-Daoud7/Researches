<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;

use App\Models\Folder;
use App\Models\Subfolder;

class FolderController extends Controller
{
    public function index(Request $request)
    {
        $folder = Folder::all();

        return response([
            'success' => true,
            "folders" => $folder
        ],200);
    }

    public function show(Request $request,$id)
    {
        $folder = Folder::find($id);

        if(!$folder) {
            return response([
                'success' => false,
                "message" => "folder not found"
            ],404);            
        }

        return response([
            'success' => true,
            "folder" => $folder
        ],200);
    }

    public function store(Request $request)
    {
        // validattion
        $fields = $request->validate([
            "name" => "required|string|unique:folders,name",
        ]);


        $folder = Folder::create($fields);

        return response([
            'success' => true,
            "folder" => $folder
        ],201);
    }

    public function update(Request $request,$id)
    {
        // Find client
        $folder = Folder::find($id);
        
        if(!$folder) {
            return response([
                'success' => false,
                "message" => "folder not found"
            ],404);            
        }

        // validattion
        $fields = $request->validate([
            "name" => "required|string",
        ]);

        $folder->update($fields);

        return response([
            'success' => true,
            "folder" => $folder
        ],201);
    }

    public function destroy($id)
    {
        // Find product
        $folder = Folder::find($id);
        
        if(!$folder) {
            return response([
                'success' => false,
                "message" => "folder not found"
            ],404);            
        }
        
        Folder::destroy($id);
        
        return response([
            'success' => true,
            "message" => "folder deleted"
        ],201);
    }

    public function getFiles($id) {
        $folder = Folder::find($id);
        
        if(!$folder) {
            return response([
                'success' => false,
                "message" => "folder not found"
            ],404);            
        }

        $files = File::where("folder_id",$id)->get();

        return response([
            'success' => true,
            "files" => $files
        ],200);
    }
    
    public function getSubFolders($id) {
        $folder = Folder::find($id);
        
        if(!$folder) {
            return response([
                'success' => false,
                "message" => "folder id not found"
            ],404);            
        }
        
        $subfolders = Subfolder::where("folder_id",$id)->get();

        return response([
            'success' => true,
            "subfolders" => $subfolders
        ],200);
    }
}
