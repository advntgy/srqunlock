# Run this from inside your srqunlock folder: .\fix-response-times.ps1
# It edits files in place. Review with "git diff" afterward before committing.

$edits = @(
  # --- locksmith-englewood/page.tsx ---
  @{ File = "src\app\locksmith-englewood\page.tsx"; Old = "15-20 min response. Call (941) 587-5050!"; New = "Fast response. Call (941) 587-5050!" },
  @{ File = "src\app\locksmith-englewood\page.tsx"; Old = "Fast 15-20 min response. NASTF Certified. Call now!"; New = "Fast response. NASTF Certified. Call now!" },
  @{ File = "src\app\locksmith-englewood\page.tsx"; Old = "Locked out at Englewood Beach or Manasota Key? We arrive in 15-20 minutes."; New = "Locked out at Englewood Beach or Manasota Key? We arrive fast." },
  @{ File = "src\app\locksmith-englewood\page.tsx"; Old = "From Englewood Beach to Rotonda West, we provide fast 15-20 minute response."; New = "From Englewood Beach to Rotonda West, we provide fast response." },
  @{ File = "src\app\locksmith-englewood\page.tsx"; Old = '15-20 Min Response'; New = 'Fast Response' },
  @{ File = "src\app\locksmith-englewood\page.tsx"; Old = "15-20 minute average arrival time"; New = "Fast average arrival time" },
  @{ File = "src\app\locksmith-englewood\page.tsx"; Old = "we&apos;ll be there in 15-20 minutes.</p>"; New = "we&apos;ll be there fast.</p>" },

  # --- locksmith-north-port/page.tsx ---
  @{ File = "src\app\locksmith-north-port\page.tsx"; Old = "Fast 15-minute response for emergencies. Available 24/7/365."; New = "Fast response for emergencies. Available 24/7/365." },
  @{ File = "src\app\locksmith-north-port\page.tsx"; Old = "15-Min Response"; New = "Fast Response" },
  @{ File = "src\app\locksmith-north-port\page.tsx"; Old = "15-minute average arrival time"; New = "Fast average arrival time" },

  # --- locksmith-port-charlotte/page.tsx ---
  @{ File = "src\app\locksmith-port-charlotte\page.tsx"; Old = "15-20 min response. Charlotte County's #1 choice. Call (941) 587-5050!"; New = "Fast response. Charlotte County's #1 choice. Call (941) 587-5050!" },
  @{ File = "src\app\locksmith-port-charlotte\page.tsx"; Old = "Fast 15-20 min response. NASTF Certified. Call now!"; New = "Fast response. NASTF Certified. Call now!" },
  @{ File = "src\app\locksmith-port-charlotte\page.tsx"; Old = "Locked out at Town Center Mall or Murdock Circle? We arrive in 15-20 minutes."; New = "Locked out at Town Center Mall or Murdock Circle? We arrive fast." },
  @{ File = "src\app\locksmith-port-charlotte\page.tsx"; Old = "we provide fast 15-20 minute response for car lockouts, key programming, and home security."; New = "we provide fast response for car lockouts, key programming, and home security." },
  @{ File = "src\app\locksmith-port-charlotte\page.tsx"; Old = "15-20 Min Response"; New = "Fast Response" },
  @{ File = "src\app\locksmith-port-charlotte\page.tsx"; Old = "15-20 minute average arrival time"; New = "Fast average arrival time" },
  @{ File = "src\app\locksmith-port-charlotte\page.tsx"; Old = "Our mobile locksmith can reach anywhere in Port Charlotte within 15-20 minutes."; New = "Our mobile locksmith can reach anywhere in Port Charlotte quickly." },

  # --- locksmith-punta-gorda/page.tsx ---
  @{ File = "src\app\locksmith-punta-gorda\page.tsx"; Old = "Charlotte County experts. 20-25 min response. Call (941) 587-5050!"; New = "Charlotte County experts. Fast response. Call (941) 587-5050!" },
  @{ File = "src\app\locksmith-punta-gorda\page.tsx"; Old = "Fast 20-25 min response. NASTF Certified. Call now!"; New = "Fast response. NASTF Certified. Call now!" },
  @{ File = "src\app\locksmith-punta-gorda\page.tsx"; Old = "Locked out at Fishermen's Village or Downtown? We arrive in 20-25 minutes."; New = "Locked out at Fishermen's Village or Downtown? We arrive fast." },
  @{ File = "src\app\locksmith-punta-gorda\page.tsx"; Old = "From Fishermen&apos;s Village to Punta Gorda Isles, we provide 20-25 minute response"; New = "From Fishermen&apos;s Village to Punta Gorda Isles, we provide fast response" },
  @{ File = "src\app\locksmith-punta-gorda\page.tsx"; Old = "20-25 Min Response"; New = "Fast Response" },
  @{ File = "src\app\locksmith-punta-gorda\page.tsx"; Old = "within 20-25 minutes. We serve the Historic District, Burnt Store Road corridor, Seminole Lakes,"; New = "quickly. We serve the Historic District, Burnt Store Road corridor, Seminole Lakes," },
  @{ File = "src\app\locksmith-punta-gorda\page.tsx"; Old = "20-25 minute average arrival time"; New = "Fast average arrival time" },
  @{ File = "src\app\locksmith-punta-gorda\page.tsx"; Old = "Our mobile locksmith can reach anywhere in Punta Gorda within 20-25 minutes."; New = "Our mobile locksmith can reach anywhere in Punta Gorda quickly." },
  @{ File = "src\app\locksmith-punta-gorda\page.tsx"; Old = "We&apos;re just 20-25 minutes away. Call now for immediate service in Charlotte County."; New = "We&apos;re always close by. Call now for immediate service in Charlotte County." },

  # --- locksmith-sarasota/page.tsx ---
  @{ File = "src\app\locksmith-sarasota\page.tsx"; Old = "NASTF Certified, 20-25 min response. Sarasota County's choice. Call (941) 587-5050!"; New = "NASTF Certified, fast response. Sarasota County's choice. Call (941) 587-5050!" },
  @{ File = "src\app\locksmith-sarasota\page.tsx"; Old = "Fast 20-25 min response. NASTF Certified. Call now!"; New = "Fast response. NASTF Certified. Call now!" },
  @{ File = "src\app\locksmith-sarasota\page.tsx"; Old = "Locked out at Siesta Key Beach or St. Armands Circle? We arrive in 20-25 minutes."; New = "Locked out at Siesta Key Beach or St. Armands Circle? We arrive fast." },
  @{ File = "src\app\locksmith-sarasota\page.tsx"; Old = "we provide fast 20-25 minute response for car lockouts, key programming,"; New = "we provide fast response for car lockouts, key programming," },
  @{ File = "src\app\locksmith-sarasota\page.tsx"; Old = "20-25 Min Response"; New = "Fast Response" },
  @{ File = "src\app\locksmith-sarasota\page.tsx"; Old = "Lakewood Ranch, we arrive within 20-25 minutes."; New = "Lakewood Ranch, we arrive fast." },
  @{ File = "src\app\locksmith-sarasota\page.tsx"; Old = "20-25 minute average arrival time"; New = "Fast average arrival time" },
  @{ File = "src\app\locksmith-sarasota\page.tsx"; Old = "Our mobile locksmith can reach most Sarasota locations within 20-25 minutes."; New = "Our mobile locksmith can reach most Sarasota locations quickly." },

  # --- locksmith-venice-fl/page.tsx ---
  @{ File = "src\app\locksmith-venice-fl\page.tsx"; Old = "The Shark Tooth Capital's #1 choice. 15-20 min response. Call (941) 587-5050!"; New = "The Shark Tooth Capital's #1 choice. Fast response. Call (941) 587-5050!" },
  @{ File = "src\app\locksmith-venice-fl\page.tsx"; Old = "Fast 15-20 min response. NASTF Certified. Call now!"; New = "Fast response. NASTF Certified. Call now!" },
  @{ File = "src\app\locksmith-venice-fl\page.tsx"; Old = "Locked out at Venice Beach or Sharky's Pier? We arrive in 15-20 minutes."; New = "Locked out at Venice Beach or Sharky's Pier? We arrive fast." },
  @{ File = "src\app\locksmith-venice-fl\page.tsx"; Old = "we provide fast 15-20 minute response for car lockouts, key programming, and home security."; New = "we provide fast response for car lockouts, key programming, and home security." },
  @{ File = "src\app\locksmith-venice-fl\page.tsx"; Old = "15-20 Min Response"; New = "Fast Response" },
  @{ File = "src\app\locksmith-venice-fl\page.tsx"; Old = "or require a lock rekey on Venice Island, we arrive within 15-20 minutes."; New = "or require a lock rekey on Venice Island, we arrive fast." },
  @{ File = "src\app\locksmith-venice-fl\page.tsx"; Old = "15-20 minute average arrival time"; New = "Fast average arrival time" },
  @{ File = "src\app\locksmith-venice-fl\page.tsx"; Old = "Our mobile locksmith can reach anywhere in Venice within 15-20 minutes."; New = "Our mobile locksmith can reach anywhere in Venice quickly." },

  # --- emergency-locksmith-charlotte-county/page.tsx ---
  @{ File = "src\app\emergency-locksmith-charlotte-county\page.tsx"; Old = "We arrive in 15 minutes or less to get you back on the road."; New = "We arrive fast to get you back on the road." },
  @{ File = "src\app\emergency-locksmith-charlotte-county\page.tsx"; Old = "15-Minute Average Response Time"; New = "Fast Average Response Time" },

  # --- booking/page.tsx ---
  @{ File = "src\app\booking\page.tsx"; Old = "Average Response Time:</strong> 15 minutes"; New = "Average Response Time:</strong> Fast" },

  # --- about-us/page.tsx ---
  @{ File = "src\app\about-us\page.tsx"; Old = "typically within 15 minutes —"; New = "quickly —" },

  # --- automotive-services/page.tsx ---
  @{ File = "src\app\automotive-services\page.tsx"; Old = "15-Min Response"; New = "Fast Response" }
)

$notFound = @()

foreach ($edit in $edits) {
  if (Test-Path $edit.File) {
    $content = Get-Content $edit.File -Raw
    if ($content.Contains($edit.Old)) {
      $content = $content.Replace($edit.Old, $edit.New)
      Set-Content -Path $edit.File -Value $content -NoNewline
      Write-Host "OK: $($edit.File)" -ForegroundColor Green
    } else {
      Write-Host "NOT FOUND (text didn't match exactly): $($edit.File) -> '$($edit.Old)'" -ForegroundColor Yellow
      $notFound += $edit
    }
  } else {
    Write-Host "FILE MISSING: $($edit.File)" -ForegroundColor Red
  }
}

Write-Host "`nDone. $($notFound.Count) edits did not match — review those manually." -ForegroundColor Cyan
Write-Host "Now run: git diff   to review every change before committing." -ForegroundColor Cyan
