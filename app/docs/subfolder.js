/*
	Here you can find all subfolders routes
*/

router.get("localhost:8000/api/subfolders");

/*
	@description: it will return you all the subfolders in the database
	@method GET
	@route /api/subfolders
    @response example: 
    {
    
        "success": true,
        "subfolders": [
              {
                "id": 3,
                "name": "momen",
                "folder_id": 1,
                "parent_id": null,
                "created_at": "2023-01-29T19:03:12.000000Z",
                "updated_at": "2023-01-29T19:03:12.000000Z"
            },
            {
                "id": 4,
                "name": "big",
                "folder_id": 1,
                "parent_id": null,
                "created_at": "2023-01-29T19:03:21.000000Z",
                "updated_at": "2023-01-29T19:03:21.000000Z"
            }
        ]
    }
*/

router.get("localhost:8000/api/subfolders/:id");

/*
	@description: it will return a single subfolder and it will send 404 if it not exist
	@method GET
	@route /api/subfolders/:id
	@response example :
	{
    "success": true,
      "folder": {
        "id": 3,
        "name": "momen",
        "folder_id": 1,
        "parent_id": null,
        "created_at": "2023-01-29T19:03:12.000000Z",
        "updated_at": "2023-01-29T19:03:12.000000Z"
    }
}
*/

router.post("localhost:8000/api/subfolders");

/*
	@description: it will create a new subfolder and it will send 400 if there's wrong with the fields validation
	@method Post
	@route /api/subfolders
    @folder_id : is the folder_id in the folders tables
    @parent_id :  is used in case you want to create a subfolder inside a subfolder and the parent_id is refering to target subfolder you want to create inside
	@request example:
	{
		"name": "big",
        "folder_id": 1
	}

    @response example: 
    {
        "success": true,
          "subfolder": {
            "name": "big",
            "folder_id": 1,
            "updated_at": "2023-01-29T19:03:21.000000Z",
            "created_at": "2023-01-29T19:03:21.000000Z",
            "id": 4
        }
    }

    @request example:
	{
		"name": "big",
        "parent_id": 1
	}

    @response example: 
    {
        "success": true,
          "subfolder": {
            "name": "big",
            "parent_id": 1,
            "updated_at": "2023-01-29T19:03:21.000000Z",
            "created_at": "2023-01-29T19:03:21.000000Z",
            "id": 4
        }
    }
*/

router.put("localhost:8000/api/subfolders/:id");

/*
	@description: it will update an exitting subfolder and it will send 404 if it not exist
	@method PATCH or PUT
	@access private
	@authorize only admins can access it
	@route /api/subfolders/:id
	@request example:
	{
		name:"john"
	}
    @response example:
    {
        "success": true,
        "subfolder": {
            "id": 3,
            "name": "john",
            "folder_id": 1,
            "parent_id": null,
            "created_at": "2023-01-29T19:03:12.000000Z",
            "updated_at": "2023-01-29T19:17:27.000000Z"
        }
    }
*/

router.delete("localhost:8000/api/subfolders/:id");

/*
	@description: it will delete an exitting subfolder and it will send 404 if it not exist
	@method DELETE
	@route /api/subfolders/:id
*/

router.get("localhost:8000/api/subfolders/subsubfolders/:id");

/*
	@description: it will return a list of the subsubfolders of the target subfolder
	@method GET
	@route /api/subfolders/subsubfolders/:id
	@response example :
	{
        "success": true,
        "subsubfolders": [
            {
                "id": 3,
                "name": "momen",
                "subfolder_id": 1,
                "parent_id": null,
                "created_at": "2023-01-29T19:03:12.000000Z",
                "updated_at": "2023-01-29T19:03:12.000000Z"
            },
            {
                "id": 4,
                "name": "big",
                "subfolder_id": 1,
                "parent_id": null,
                "created_at": "2023-01-29T19:03:21.000000Z",
                "updated_at": "2023-01-29T19:03:21.000000Z"
            }
        ]
    
    }
*/

router.get("localhost:8000/api/subfolders/files/:id");

/*
	@description: it will return a list of subfolder's files
	@method GET
	@route /api/subfolders/files/:id
	@response example :
	{
        "success": true,
        "files": [
            {
                "id": 3,
                "name": "m",
                "text": "john",
                "folder_id": null,
                "subfolder_id": 3,
                "created_at": "2023-01-29T20:29:47.000000Z",
                "updated_at": "2023-01-29T20:29:47.000000Z"
            },
            {
                "id": 2,
                "name": "m",
                "text": "john",
                "subfolder_id": 1,
                "subsubfolder_id": null,
                "created_at": "2023-01-29T19:05:39.000000Z",
                "updated_at": "2023-01-29T19:05:39.000000Z"
            }
        ]
    }
*/

router.get("localhost:8000/api/subfolders/folders/:id");

/*
	@description: it will return a list of subfolders of the subfolder
	@method GET
	@route /api/subfolders/folders/:id
	@response example :
	{
    "success": true,
      "folder": {
        "id": 6,
        "name": "big",
        "folder_id": null,
        "parent_id": 3,
        "created_at": "2023-01-29T20:24:43.000000Z",
        "updated_at": "2023-01-29T20:24:43.000000Z"
    }
}
*/
