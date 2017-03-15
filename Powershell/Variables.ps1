# Destination site 
$siteRelativeUrl = "/abt/tech"
$destinationUrl = "http://kapo.nexplore.ch" + $siteRelativeUrl;


#overwrite the custom variables with the server specific settings
$localConfig = $ENV:COMPUTERNAME + ".Variables.ps1";

# Locale
$Locale = 1031 #En-US

$provisionGermanPage = $true;

# depending on variation settings and behavior this might be true or false
$provisionFrenchPage = $false; 
