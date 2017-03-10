. .\Variables.ps1

function Upload-JavaScript {
	param(
		[Parameter(Mandatory=$True)]
		[string] $fileName
	)

    $remoteAssetsPath = "Style Library\kapo-tech-startpage"
    $scriptBuildPath = "..\dist\" + $fileName;
    Add-PnPFile -Path $scriptBuildPath -Folder $remoteAssetsPath -Checkout -Publish
}

Upload-JavaScript "main.js"
Upload-JavaScript "main.js.map"
Upload-JavaScript "main.css"
Upload-JavaScript "main.css.map"
Upload-JavaScript "vendor.js"
Upload-JavaScript "vendor.js.map"
Upload-JavaScript "vendor.css"
Upload-JavaScript "vendor.css.map"
