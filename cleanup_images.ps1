$imagesToDelete = @(
    "C:\Users\User\Desktop\safa-promax\public\images\ai\safa-org-hero.png",
    "C:\Users\User\Desktop\safa-promax\public\images\ai\safa-perception.png"
)

foreach ($image in $imagesToDelete) {
    if (Test-Path $image) {
        Remove-Item $image -Force
        Write-Output "Deleted: $image"
    } else {
        Write-Output "Not found: $image"
    }
}
