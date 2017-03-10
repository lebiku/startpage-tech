### Setup and Connect
. .\Variables.ps1

## Windows 10 Rechner
#Install-Module SharePointPnPPowerShellOnline -AllowClobber
#Install-Module SharePointPnPPowerShell2016 -AllowClobber
#Install-Module SharePointPnPPowerShell2013 -AllowClobber -Force

# Alternativ auch nicht Windows10 Rechnern
https://download.microsoft.com/download/4/1/A/41A369FA-AA36-4EE9-845B-20BCC1691FC5/PackageManagement_x64.msi
Install-PowerShellPackageManagement
Install-Module 'SharePointPnPPowerShell2013' -Force -SkipPublisherCheck 

# Auto Credentials
$Credential = Get-Credential;

Connect-PnPOnline -Url $destinationUrl -Credentials $Credential

# Provision taxonomy items
Apply-PnPProvisioningTemplate -Path "Taxonomy.xml"

# Provision Javascript and CSS files
.\Artifacts.ps1

$relativeHomePageUrl = '/de-DE/Seiten/default.aspx';
$relativePortalUrl = $siteRelativeUrl + $relativeHomePageUrl 

Connect-PnPOnline -url ($destinationUrl + "/de-DE") -credentials $Credential
Set-PnPFileCheckedOut -Url $relativePortalUrl

Add-PnPWebPartToWebPartPage -ServerRelativePageUrl $relativePortalUrl -Path '.\AppLoaderDist.webpart' -ZoneId "Header" -ZoneIndex 1
Set-PnPFileCheckedIn -Url $relativePortalUrl

$relativeHomePageUrl = '/fr-FR/Pages/default.aspx';
$relativePortalUrl = $siteRelativeUrl + $relativeHomePageUrl 

Connect-PnPOnline -url ($destinationUrl + "/fr-FR") -credentials $Credential
Set-PnPFileCheckedOut -Url $relativePortalUrl

Add-PnPWebPartToWebPartPage -ServerRelativePageUrl $relativePortalUrl -Path '.\AppLoaderDist.webpart' -ZoneId "Header" -ZoneIndex 1
Set-PnPFileCheckedIn -Url $relativePortalUrl
