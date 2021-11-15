// TextDecoderStream
// Edit #1
// Edit #2
// Edit #3
// #edit 4


curl -H 'Accept: application/json' -H "Authorization: Bearer 4b8c80c9daa96ad2acf5253bc6e694dca7671f6fa9734f22a2f22d749cf659231d4639481957e86e" https://api.crowdin.com/api/v2/projects/480641/strings?croql=count%20of%20translations%20where%20(%20language%20%3D%20%40language%3A%22en%22%20and%20(%20context%20%3D%20%22fd.portal%22)%20)%20%3D%200\n
curl -H 'Accept: application/json' -H "Authorization: Bearer 4b8c80c9daa96ad2acf5253bc6e694dca7671f6fa9734f22a2f22d749cf659231d4639481957e86e" https://api.crowdin.com/api/v2/projects/480641/strings/1
output=$( jq -nRr --arg s 'count of strings where (language = @language:"en") = 0' '$s|@uri')
output1=$( jq -nRr --arg s 'identifier=".fd.categories" and identifier=".fd.customers"' '$s|@uri')
curl -H 'Accept: application/json' -H "Authorization: Bearer 4b8c80c9daa96ad2acf5253bc6e694dca7671f6fa9734f22a2f22d749cf659231d4639481957e86e" https://api.crowdin.com/api/v2/projects/480641/strings?croql=context%20where%20(context%20%3D%20%40context%3A%22fd.portal%22)

curl 
   -H "Accept: application/json"
   -H "Authorization: Bearer 4b8c80c9daa96ad2acf5253bc6e694dca7671f6fa9734f22a2f22d749cf659231d4639481957e86e"





   https://api.crowdin.com/api/v2/projects/480641/strings?croql=identifier%3D%22.fd.categories%22%20or%20identifier%3D%22.fd.customers%22
   https://api.crowdin.com/api/v2/projects/480641/strings?croql=identifier%3D%22.fd.emailtemplate%22%20or%20identifier%3D%22.fd.createmenu%22


   https://api.crowdin.com/api/v2/projects/480641/strings?croql=identifier%3D%22.fd.emailtemplate%22%20or%20identifier%3D%22.fd.createmenu%22
   https://api.crowdin.com/api/v2/projects/480641/strings?croql=identifier%3D%22.fd.emailtemplate%22%20or%20identifier%3D%22.fd.createmenu%22