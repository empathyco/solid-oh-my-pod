# empathy.co PMS (Pod Management System)

This is a work-in-progress implementation of a Solid Pod Management System.

Solid is a web decentralization project led by Tim Berners Lee in collaboration with MIT. Learn more about the solid project [here](https://solidproject.org/).

This proof-of-concept application tries to improve the user experience (UX) with Pods (Personal Online Data Stores) making it more human, friendly & understandable.

Application is being developed in collaboration with the [WESO](http://www.weso.es/), the Web Semantic research group of the University of Oviedo & [empathy.co](https://www.empathy.co/).

## Working features
1. Succesful Log in and Log out
2. You can edit your profile 
3. Delete & add friends
4. Integrated Pod File Management
5. Internationalization in English and Spanish

## Log In
When log in you will be asked for a Pod provider, either Solid Community or Inrupt.

Learn how to get a Solid Pod [here](https://solid.inrupt.com/get-a-solid-pod) or [here](https://solidproject.org/use-solid/#get-a-pod-and-a-webid).

This is the Log In screen. The Sign In and resgister links will redirect you to the website of the provider you may choose.

 ![Login](https://github.com/empathyco/solid-pods-management/blob/master/docs/img/login.jpg)   
 
 
 Once you are logged in, you will see the welcome page
  ![Welcome page](https://github.com/empathyco/solid-pods-management/blob/master/docs/img/welcome.jpg)
 
 ## Profile View
 In the profile view you can edit any fields of your profile and they will be saved immedietely
 
 ![Profile View fields](https://github.com/empathyco/solid-pods-management/blob/master/docs/img/profile.jpg)
 
 In this view you can also have the option to delete your Pod, redirecting you to your Pod provider.
 
 ![Profile view delete](https://github.com/empathyco/solid-pods-management/blob/master/docs/img/profile2.jpg)
 
 ## Friends View
 
 In this view you can see all your friends with their profile photo and card URI. You can also delete a friend, just by pressing the button below their name. This button will ask for a confirmation before deleting the friend.
 
 ![Friend View List](https://github.com/empathyco/solid-pods-management/blob/master/docs/img/friends.jpg)
 
 You can also add new friends by clicking the plus icon at the bottom right corner of the page. A dialog will appear. In this dialog you just have to choose your friends provider and then just type their username, there is no need to type the full URI.
 
 ![Friend Add](https://github.com/empathyco/solid-pods-management/blob/master/docs/img/addfriends.jpg)
 
 ## Integrated Pod File Management
 
 In myFiles view you can see all the files you have stored in your Pod.
 
 ![File View](https://github.com/empathyco/solid-pods-management/blob/master/docs/img/filemanagement.jpg)
 
 Depending of the type of file you can have different functionalities. If it is a multimedia file you can view it on this page. If the file is editable you can edit and download the file. If it is neither one of those type files you just can download it.
 
 ![editable file view](https://github.com/empathyco/solid-pods-management/blob/master/docs/img/viewfile.jpg)
 
 
 # Built with
 
  - Application based on Inrupt Solid React SDK. Available [here](https://github.com/inrupt/solid-react-sdk)
  - Solid React reusable components. Available [here](https://github.com/inrupt/solid-react-components)
  - LDFlex Solid library. Available [here](https://github.com/solid/query-ldflex)
  - Solid-file-client library. Available [here](https://github.com/jeff-zucker/solid-file-client)
  - Enzyme testing utility for React. Available [here](https://github.com/enzymejs/enzyme)
  
  # Quickstart
  
  ## Installation guide
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

## Live Deployment

https://empathysolidmanagement.netlify.com/

## License

GNU Lesser General Public License v3.0

