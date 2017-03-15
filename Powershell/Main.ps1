### Setup and Connect
. .\Variables.ps1

# Auto Credentials
$Credential = Get-Credential;

Connect-PnPOnline -Url $destinationUrl -Credentials $Credential

# Provision taxonomy items
Apply-PnPProvisioningTemplate -Path "template.xml"

# Provision Javascript and CSS files
.\Artifacts.ps1

if ($provisionGermanPage -eq $true) {
  $relativeHomePageUrl = '/de-DE/Seiten/default.aspx';
  $relativePortalUrl = $siteRelativeUrl + $relativeHomePageUrl 

  Connect-PnPOnline -url ($destinationUrl + "/de-DE") -credentials $Credential
  Set-PnPFileCheckedOut -Url $relativePortalUrl
  Add-PnPWebPartToWebPartPage -ServerRelativePageUrl $relativePortalUrl -Path '.\AppLoaderDist.webpart' -ZoneId "Header" -ZoneIndex 1
  Set-PnPFileCheckedIn -Url $relativePortalUrl
}

if ($provisionFrenchPage -eq $true) {
  $relativeHomePageUrl = '/fr-FR/Pages/default.aspx';
  $relativePortalUrl = $siteRelativeUrl + $relativeHomePageUrl 

  Connect-PnPOnline -url ($destinationUrl + "/fr-FR") -credentials $Credential
  Set-PnPFileCheckedOut -Url $relativePortalUrl

  Add-PnPWebPartToWebPartPage -ServerRelativePageUrl $relativePortalUrl -Path '.\AppLoaderDist.webpart' -ZoneId "Header" -ZoneIndex 1
  Set-PnPFileCheckedIn -Url $relativePortalUrl
}
