/*
	Here you can find all files routes
*/

router.get("localhost:8000/api/files");

/*
	@description: it will return you all the files in the database
	@method GET
	@route /api/files
    @response example: 
    {
    
        "success": true,
        "files": [
            {
                "id": 1,
                "name": "m",
                "text": "john",
                "file_id": 1,
                "subfile_id": null,
                "created_at": "2023-01-29T19:05:38.000000Z",
                "updated_at": "2023-01-29T19:05:38.000000Z"
            },
            {
                "id": 2,
                "name": "m",
                "text": "john",
                "file_id": 1,
                "subfile_id": null,
                "created_at": "2023-01-29T19:05:39.000000Z",
                "updated_at": "2023-01-29T19:05:39.000000Z"
            },
            {
                "id": 3,
                "name": "m",
                "text": "john",
                "file_id": null,
                "subfile_id": 3,
                "created_at": "2023-01-29T20:29:47.000000Z",
                "updated_at": "2023-01-29T20:29:47.000000Z"
            }

        ]
    }
*/

router.get("localhost:8000/api/files/:id");

/*
	@description: it will return a single file and it will send 404 if it not exist
	@method GET
	@route /api/files/:id
	@response example :
	{
        "success": true,
        "file": {
            "id": 1,
            "name": "m",
            "text": "john",
            "file_id": 1,
            "subfile_id": null,
            "created_at": "2023-01-29T19:05:38.000000Z",
            "updated_at": "2023-01-29T19:05:38.000000Z"
        }
}
*/

router.post("localhost:8000/api/files");

/*
	@description: it will create a new file and it will send 400 if there's wrong with the fields validation
	@method Post
	@route /api/files
	@request example:
	{
		"name":"m",
        "subfolder_id": 3,
        "text": "john"
	}

    @response example: 
    {
        "success": true,
        "file": {
             "name": "m",
                "text": "john",
                "subfolder_id": 3,
                "updated_at": "2023-01-29T20:29:47.000000Z",
                "created_at": "2023-01-29T20:29:47.000000Z",
                "id": 3
        }
    }
*/

router.put("localhost:8000/api/files/:id");

/*
	@description: it will update an exitting file and it will send 404 if it not exist
	@method PATCH or PUT
	@route /api/files/:id
	@request example:
	{
        "name": "go",
        "text": "Any shit"    
	}
    @response example:
    {
        "success": true,
        "file": {
            "id": 1,
            "name": "go",
            "text": "Any shit",
            "folder_id": 1,
            "subfolder_id": null,
            "created_at": "2023-01-29T19:05:38.000000Z",
            "updated_at": "2023-01-29T20:39:39.000000Z"
        }
    }
*/

router.delete("localhost:8000/api/files/:id");

/*
	@description: it will delete an exitting files and it will send 404 if it not exist
	@method DELETE
	@route /api/files/:id
*/
