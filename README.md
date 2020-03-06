# solid-pods-management

This is an implementation of a SOLID POD management system. This implementation is in continious progress.

Solid is a descentralization project led by Tim Berners Lee in collaboration with MIT.
Learn more about the solid project here: [Solid Project](https://solidproject.org/).

This application is being developed to try to improve the user experience so it is easier and clearier for a user to interact with its POD (Personal Online Data Stores).The application is being developed in collaboration with the WESO research group, the web semantic research group of the University of Oviedo sand empathy.co, a company from northern Spain, established in Gijón, but with international transcendence.

The main objectives of this application are the following:

Improve user experience for the moment, interacting with a POD is complex and difficult even if you're familiar with the computer science world. We're trying to make it easier to the users to manage the data they want to store in their POD, because the first step to gain users, is making their life easier.Improve security and privacy.

## Working features
1. Succesful log in and log out
2. You can edit your profile 
3. Delete and add friends
4. File Management of PODS
5. Internationalization in Spanish and English

## Logging In
When logging in you will be ask for a provider either Solid Community or Inrupt.

Learn how to get a Solid POD [Here](https://solid.inrupt.com/get-a-solid-pod).

This is the loggin at the momment the sign in and resgister links with redirect you to the website of the provider of your own chosing

 ![Loggin image](https://api.media.atlassian.com/file/a7c0cbac-4372-4095-98e7-4dc768609fc5/image?mode=full-fit&client=cc603d48-5423-4d78-9c6a-ee28cc7f28ac&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYzYwM2Q0OC01NDIzLTRkNzgtOWM2YS1lZTI4Y2M3ZjI4YWMiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOmE3YzBjYmFjLTQzNzItNDA5NS05OGU3LTRkYzc2ODYwOWZjNSI6WyJyZWFkIl19LCJleHAiOjE1ODM1MTkzMjMsIm5iZiI6MTU4MzUxNTk2M30.uFXZ_WX3CPDotd6ES3_5JaP9okvWJ0kcVGITtGt3mtQ)   
 
 Once you're logged in you will see the welcome page that is this
  ![Welcome page image](https://api.media.atlassian.com/file/eecfb965-7033-4652-afc9-d525524982ce/image?mode=full-fit&client=cc603d48-5423-4d78-9c6a-ee28cc7f28ac&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYzYwM2Q0OC01NDIzLTRkNzgtOWM2YS1lZTI4Y2M3ZjI4YWMiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOmVlY2ZiOTY1LTcwMzMtNDY1Mi1hZmM5LWQ1MjU1MjQ5ODJjZSI6WyJyZWFkIl19LCJleHAiOjE1ODM1MTk1MjAsIm5iZiI6MTU4MzUxNjE2MH0.ByBiES0i7e12Pko8HQysD6qArBFHiuc_1nvOawaFJ_8)
 
 ## Profile View
 In the profile view you can edit any fields of your profile and they will be saved immedietly
 
 ![Profile View fields](https://api.media.atlassian.com/file/cd71ab49-cc06-45a3-9665-a3944f7b2e38/image?mode=full-fit&client=cc603d48-5423-4d78-9c6a-ee28cc7f28ac&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYzYwM2Q0OC01NDIzLTRkNzgtOWM2YS1lZTI4Y2M3ZjI4YWMiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOmNkNzFhYjQ5LWNjMDYtNDVhMy05NjY1LWEzOTQ0ZjdiMmUzOCI6WyJyZWFkIl19LCJleHAiOjE1ODM1MTk1MjAsIm5iZiI6MTU4MzUxNjE2MH0.lb7ZfmxXrJMbggaWCW_bA_vaUMUMuobGDBjE2zPBbSU)
 
 In this view you can also delete your POD it will redirect you to your POD provider.
 
 ![Profile view delete](https://api.media.atlassian.com/file/0c706f66-d9d6-4d1e-8ae8-18bb67fbae9f/image?mode=full-fit&client=cc603d48-5423-4d78-9c6a-ee28cc7f28ac&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYzYwM2Q0OC01NDIzLTRkNzgtOWM2YS1lZTI4Y2M3ZjI4YWMiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOjBjNzA2ZjY2LWQ5ZDYtNGQxZS04YWU4LTE4YmI2N2ZiYWU5ZiI6WyJyZWFkIl19LCJleHAiOjE1ODM1MTk1MjAsIm5iZiI6MTU4MzUxNjE2MH0.gWPnTD_iAoth3jmuXnxHAnZXi2_eBjl9hx-WBwNmIWo)
 
 ## Friends View
 
 In this view you can see all your friends with their profile photo and card uri. You can also simply delete a friend of your choosing just by pressing the button bellow their name. This button will ask for a confirmation before deleting the friend.
 
 ![Friend View List](https://api.media.atlassian.com/file/1d729ebc-2215-4c53-bdad-92f23b86ef49/image?mode=full-fit&client=cc603d48-5423-4d78-9c6a-ee28cc7f28ac&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYzYwM2Q0OC01NDIzLTRkNzgtOWM2YS1lZTI4Y2M3ZjI4YWMiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOjFkNzI5ZWJjLTIyMTUtNGM1My1iZGFkLTkyZjIzYjg2ZWY0OSI6WyJyZWFkIl19LCJleHAiOjE1ODM1MTk1MjAsIm5iZiI6MTU4MzUxNjE2MH0.g7lv0tVH2b0j3VbcVngKjY6ADyUPazyVXiHAnGg8gEA)
 
 You can also simply add new friends by clicking the plus icon at the bottom of the page. A dialog will appear. In this dialog you just have to choose your friends provider and then just type their username, there is no need to type the full URI. Like in the example bellow.
 
 ![Friend Add](https://api.media.atlassian.com/file/1f7c4819-0e9d-4e18-87a9-d5fd8ddf12bb/image?mode=full-fit&client=cc603d48-5423-4d78-9c6a-ee28cc7f28ac&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYzYwM2Q0OC01NDIzLTRkNzgtOWM2YS1lZTI4Y2M3ZjI4YWMiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOjFmN2M0ODE5LTBlOWQtNGUxOC04N2E5LWQ1ZmQ4ZGRmMTJiYiI6WyJyZWFkIl19LCJleHAiOjE1ODM1MTk1MjAsIm5iZiI6MTU4MzUxNjE2MH0.ihefImDevLuFIAqH3NlXOV_3HsAM_OS4hwjYK16380k)
 
 ## File Management
 
 In myFiles view you can see all the files you have store in your POD.
 
 ![File View](https://api.media.atlassian.com/file/91825e28-4106-406e-9dfc-8a70818551f5/image?mode=full-fit&client=cc603d48-5423-4d78-9c6a-ee28cc7f28ac&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYzYwM2Q0OC01NDIzLTRkNzgtOWM2YS1lZTI4Y2M3ZjI4YWMiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOjkxODI1ZTI4LTQxMDYtNDA2ZS05ZGZjLThhNzA4MTg1NTFmNSI6WyJyZWFkIl19LCJleHAiOjE1ODM1MTk1MjAsIm5iZiI6MTU4MzUxNjE2MH0.pzFN69Wgx2WbXipdYpnA0N9g4mFkRQTHSpawpsBHLFs)
 
 Depending of the type of file you can have different functionalities. If it is a multimedia file you can view it in this page. If the file is editable you can edit and download this file. If it is neither one of those files you can download it. The example bellow is an editable file.
 
 ![editable file view](https://api.media.atlassian.com/file/dd8435fc-3970-451c-87ce-63171bee1f0b/image?mode=full-fit&client=cc603d48-5423-4d78-9c6a-ee28cc7f28ac&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYzYwM2Q0OC01NDIzLTRkNzgtOWM2YS1lZTI4Y2M3ZjI4YWMiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOmRkODQzNWZjLTM5NzAtNDUxYy04N2NlLTYzMTcxYmVlMWYwYiI6WyJyZWFkIl19LCJleHAiOjE1ODM1MTk1MjAsIm5iZiI6MTU4MzUxNjE2MH0.wxzIjEuxM7KP7H2M45HVEeNdIUeyFgRFkzPgDNmV6wM)
 
 
 # How we built this
  - We built this using the Inrupt Solid React SDK. Available [here](https://github.com/inrupt/solid-react-sdk)
  - Using the solid react reusable components. Available [here](https://github.com/inrupt/solid-react-components)
  - Using the LDFlex for Solid library. Available [here](https://github.com/solid/query-ldflex)
  - Using solid-file-client library. Available [here](https://github.com/jeff-zucker/solid-file-client)
  - Using enzyme testing utility for React. Available [here](https://github.com/enzymejs/enzyme)
  
  # How to use this
  
  ## Installation
  ```shell
$ git clone https://github.com/empathyco/solid-pods-management
$ npm install
```
  ## Running
  ```shell
$ npm start
```
  ## Testing
  ```shell
$ npm test
```

  
  
  
 
 
 

