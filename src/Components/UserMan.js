import "./UserMan.css"
import React, { useState } from 'react'
import { arrOfApplication } from "./arrOfApplication";
import SideNavBar from "./SideNavBar/SideNavBar";
import {practiceArr} from "./practiceArr";

export function UserMan(){

  const [deleteId, setdeleteId] = useState();

    const [app,setapp] = useState(arrOfApplication);

  var environment =[{
    id:0,
    Name: "",
    image: ""
  }];


  environment=environment.filter(m=>m.id !==0);
  let duplicate = environment;

  const [Environments, setEnvironments] = useState(practiceArr);

  // useEffect(() => {
  //   console.log("use effect run")
  // }, [Environments]);



  // const hadleTopRating = () => {
  //       const topapp = arrOfApplication.sort((x, y) => (x.AppName < y.AppName) ? 1 : (x.AppName > y.AppName) ? -1 : 0);
  //       console.log(topapp);
  //       setapp(topapp);
  //       console.log("clicked on top app");
  //       setapp([...arrOfApplication]);
  //   }

  //   const handleLowRating = () => {
  //       const lowapp = arrOfApplication.sort((x,y) => (x.AppName < y.AppName) ? -1 : (x.AppName > y.AppName) ? 1 : 0);
  //       setapp(lowapp);
  //       setapp([...arrOfApplication]);
  //   }

  //   const handleAllRated = () => {
  //     const application = arrOfApplication.sort((x,y) => (x.id < y.id) ? 1 : (x.id > y.id) ? -1 : 0);
  //     setapp(application);
  //     setapp([...arrOfApplication]);
  //   }

  //   const fiveStarRating = () => {
  //     const fiveStars = arrOfApplication.filter(x => x.rating === 5);
  //     setapp(fiveStars);
  //   }

  //   const fourStarRating = () => {
  //     const fourStars = arrOfApplication.filter(x => x.rating === 4);
  //     setapp(fourStars);
  //   }

  //   const threeStarRating = () => {
  //     const threeStars = arrOfApplication.filter(x => x.rating === 3);
  //     setapp(threeStars);
  //   }

  //   const twoStarRating = () => {
  //     const twoStars = arrOfApplication.filter(x => x.rating === 2);
  //     setapp(twoStars);
  //   }

  //   const OneStarRating = () => {
  //     const oneStar = arrOfApplication.filter(x => x.rating === 1);
  //     setapp(oneStar);
  //   }

    const [data,setData] = useState({
      AppName:'',
      appDescription:'',
      createdBy:''
    })

    const {AppName,appDescription,createdBy} = data;

    
    const [dataEnvironment,setDataEnvironment] = useState({
      name: '',
      type:'',
      dataSourceLink:'',
      UiD:'',
      password:'',
      IssourcePrimary:'',
    })

    const {name,type,dataSourceLink,UiD,password,IssourcePrimary} = dataEnvironment;


    const [appId,setappId] = useState();

    function setId(id){
      setappId(id);
    }

    const onchangeHandle = e => {
      setData({...data,[e.target.name]:e.target.value})
    }
   
    const onchangeHandleEnvironments = e => {
      setDataEnvironment({...dataEnvironment,[e.target.name]:e.target.value});
    }
     
    const submitHandle = (e) => {
      e.preventDefault();
      console.log("Data : "+data);
      let newId = app.length + 1;
      const newValue = [{
      id:newId,
      AppName:data.AppName,
      imageUrl:"./images/normal.jpg",
      rating:3,
      CreatedBy:data.createdBy,
      AppDescription:data.appDescription,
      environment:[]
      }];
      let newapp = [...app, ...newValue];
      console.log("Previous : "+app);
      setapp(newapp);
      console.log("New Apps :"+newapp);
    }
 
    function deleteApplication(id){
      console.log(id);
      const updatedItems = app.filter(item => item.id !== id );
      setapp(updatedItems);
    }

      const deleteEnvironment = (id) => {
        console.log(id);
        const updatedEnvironments = Environments.filter(item => item.id !== id);
        setEnvironments(updatedEnvironments);
      }

      // function getAppsOnClick(id){

      //   const application = app.filter(x => x.id === id);
      //   const environmentIds = application.map(x => x.environments);
      //   console.log(environmentIds);
      
      //   for(var i =0; i<arrayOfEnvironments.length;i++){
      //     for(var j =0; j<arrayOfEnvironments.length;j++){
      //       if(environmentIds[0][i] === arrOfApplication[j].id)
      //       {
      //         let environment1 = [{
      //           id:arrayOfEnvironments[j].id,
      //           Name: arrayOfEnvironments[j].Name,
      //           image: arrayOfEnvironments[j].image
      //         }];
      //         environment = [...environment,...environment1];
      //       }
      //     }
      //   }
      
      //   environment = environment.filter(x => x.id !== 0);
      //   setEnvironments(environment);
      //   setId(id);
      // }

      const [duplicateArr,setDuplicate] = useState([]);

      
      // const getduplicateOnClice = (id) => {
      //   console.log(Environments);
      //   let displayEnvi = Environments.filter(x => x.App === id);
      //   console.log(displayEnvi);
      //   setDuplicate(displayEnvi);
      // }

      const getduplicateOnClick = id => {
        let duplicateOnClick = Environments.filter(x => x.App === id);
        setDuplicate(duplicateOnClick);
      }

      // function updateEnvironments(){
      //  let appWtID = app.filter(m=>m.id === appId);
      //   let env = appWtID.map(m=>m.environments);
      //   console.log(env.map(m=>m));
      //   let c=0;
      //   arrayOfEnvironments.map(m=>{c++});
      //    appWtID = app.filter(m=>m.id === appId);
      //   let envWtID = appWtID[0].environments;
      //   let newEnvIds = [...envWtID, ...[(c+1)]];
      //   appWtID[0].environments = newEnvIds;
      //   let appdata = app.filter(m=>m.id !== appId);
      //   const updatedApps = [...appdata, ...appWtID];
      //   setapp(updatedApps);
      //   appWtID = app.filter(m=>m.id === appId);
      //    env = appWtID.map(m=>m.environments);
      //   console.log(env.map(m=>m));
      // }

      const saveEnvironment = e => {
        e.preventDefault();
        console.log("dataBefore =  " +dataEnvironment);
        console.log("datavalue  " +dataEnvironment.name);
        console.log("datavalue  " +dataEnvironment.type);
        console.log("datavalue  " +dataEnvironment.dataSourceLink);
        console.log("datavalue  " +dataEnvironment.UiD);
        console.log("datavalue  " +dataEnvironment.IssourcePrimary);
        const increasedSize = Environments.length +1;
        console.log(increasedSize);
        let addDuplicate = {
        id: increasedSize,
        App: appId,
        Name: dataEnvironment.name,
        image: "./images/database1.jpg",
        Type: dataEnvironment.type,
        DataSourceLink: dataEnvironment.dataSourceLink,
        UApp: dataEnvironment.UiD,
        Password: dataEnvironment.password,
        IsSourcePrimary: dataEnvironment.IssourcePrimary
        };
        // console.log("Duplicate" +addDuplicate);
        console.log("Before saving : "+Environments);
        // let newDuplicate = [...Environments,addDuplicate];
        // let newDuplicate = Environments.concat(addDuplicate);
        setEnvironments([...Environments, addDuplicate]);
        console.log("After saving : "+Environments);
        getduplicateOnClick(appId);
        return Environments;
      }

      

    return(
        <div>
            {/*Floating Window for creating User Profile*/}
            
                      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                              <div class="modal-content">
                                  <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Create New User</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    <div className="modal-body">
                    <form >
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1"   className="form-label">Application name</label>
                        <input type="text"  className="form-control" name='AppName' value={AppName}  onChange={onchangeHandle} aria-describedby="emailHelp"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1"  className="form-label">Application description</label>
                        <textarea type="text" name='appDescription' className="form-control" value={appDescription}  onChange={onchangeHandle}/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1"  className="form-label">Created by</label>
                        <input type="text" name='createdBy' className="form-control" value={createdBy} onChange={onchangeHandle} />
                      </div>
                      <button onClick={submitHandle} type="submit" data-dismiss="modal" className="btn btn-dark btn-center">Create</button>
                    </form>
                    </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">New Environment</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
      
    </div>
    
    <div className="modal-body">
      <div>
      <form >
      <div className="mb-3 row">
      <label htmlFor="exampleInputEmail1" className="col-sm-4 form-label">Environment name</label>
    <div className="col-sm-8">
    <input type="text" name="name" value={name} className="form-control" onChange={onchangeHandleEnvironments} aria-describedby="emailHelp"/>    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-4 form-label">Environment Type</label>
    <div className='col-sm-8'>
    <select className="form-select" name='type' value={type} onChange={onchangeHandleEnvironments} aria-label="Default select example">
          <option selected>--- please select ---</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
  </div>
  <div className="mb-3 row">
      <label htmlFor="exampleInputEmail1" className="col-sm-4 form-label">Data Source Link</label>
    <div className="col-sm-8">
    <input type="text" name="dataSourceLink" onChange={onchangeHandleEnvironments} value={dataSourceLink} className="form-control" aria-describedby="emailHelp"/>
    </div>
  </div>
  <div className="mb-3 row">
      <label htmlFor="exampleInputEmail1" className="col-sm-4 form-label">UID</label>
    <div className="col-sm-8">
    <input type="text" name="UiD" value={UiD} onChange={onchangeHandleEnvironments} className="form-control" aria-describedby="emailHelp"/>    
    </div>
  </div>
      <div className="mb-3 row">
        <label htmlFor="exampleInputPassword1" className="col-sm-4 form-label">Password</label>
        <div className='col-sm-8'>
        <input type="password" name="password" onChange={onchangeHandleEnvironments} value={password} className="form-control" />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-4 form-label" >Is source / Primary</label>
        <div className='col-sm-8'>
      <div className="form-check form-switch">
        <input className="form-check-input" name="IssourcePrimary" onChange={onchangeHandleEnvironments} value={IssourcePrimary} type="checkbox" role="switch" />
        </div>
        </div>
      </div>
      <button type="submit"  onClick={saveEnvironment} data-dismiss="modal" className="btn btn-dark btn-center">Submit</button>
      </form>
    </div>
    </div>
    <div className="modal-footer">
    </div>
  </div>
</div>
</div>


{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter3">
  Launch demo modal
</button> */}

<div class="modal fade" id="exampleModalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Delete</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Are you sure want to delete ? </p>
      </div>
      <div class="modal-footer">
        <button type="button" onClick={() => deleteApplication(deleteId)} class="btn btn-danger" style={{position:"absolute", left : "2%"}} data-dismiss="modal">delete</button>
        <button type="button"  class="btn btn-secondary" data-dismiss="modal" style={{position: "relative", right : "72%"}}>close</button>
      </div>
    </div>
  </div>
</div>


            {/*Top Navigation Bar*/}

        <nav class="navbar navbar-sark bg-dark">
            <h1></h1><br></br><br></br>
        </nav>

             {/*Total Page Container*/}

             <div className="WholePage">

                    {/*Left Navigation Bar*/}

                <div className="LeftContainer">
                    <SideNavBar />
                </div>

                {/*Main Container*/}
                <div className="MainContainer">

                    {/*Users Header */}
                            <div className='UserHeader' onClick={()=>setEnvironments(duplicate)}>
                            
                                <header > Applications </header>
                               
                            </div>
                    
                    {/*Users Container */}

                            <div className="UserContainer">

                                {/* Create New User*/}
      <div className='CreateNewUser'>
            <img src="./images/grey.jpg" className="card-img-top" data-toggle="modal" data-target="#exampleModalCenter" alt="..."/>
            <br></br>
            <h6>Create New User</h6>
      </div>

        {/*Users and their details Container*/}

      <div className='UsersBlock'>
          {
                app.map((item) => {
                    return(
                        <div className='col-md-2 mb-5' key={item.id}>
                      <div className="card" onClick= {() => {getduplicateOnClick(item.id);setId(item.id)}}>
                            {/*onClick={() => deleteOnClick(item.id)}*/}
                       <img   src="./images/delete.jpg" onClick={() => setdeleteId(item.id)} className="buttonImage" data-toggle="modal" data-target="#exampleModalCenter3" alt="..."/>
            <div className='UserImage'>
                {/*onClick= {()=>getAppsOnClick(item.id)}*/}
            <img  src={item.imageUrl} className="card-img-centre" alt="..."/>
            </div>
            <div className="card-body">
              <h6 className='text-center'>{item.AppName}</h6>
            </div>
            </div>
            </div>
                    )
                })
} 
        </div>
        </div>



                    {/*Users Header */}
                    <div className='UserHeader'>
                                {/*onClick={()=>setApps(duplicate)}*/}
                                <header >Applications ??? Environments</header>
                            </div>
                    
                    {/*Users Container */}

                            <div className="UserContainer">

                                {/* Create New User*/}
      <div className='CreateNewUser'>
            <img src="./images/database.jpg" className="card-img-top" data-toggle="modal" data-target="#exampleModal2" alt="..."/>
            <br></br>
            <h6>Create New Environment</h6>
      </div>

        {/*Users and their details Container*/}

      <div className='UsersBlock'>
          {
                duplicateArr.map((item) =>{
                    return(
                        <div className='col-md-2 mb-5' key={item.id}>
                        <div className="card" style={{height:"80%",marginTop:"10px"}}>
                            {/*onClick={() => deleteOnClick(item.id)}*/}
                        <img  onClick={() => deleteEnvironment(item.id)} src="./images/delete.jpg" className="buttonImage" alt="..."/>
            <div className='UserImage'>
                {/*onClick= {()=>getAppsOnClick(item.id)}*/}
            <img src={item.image} className="card-img-centre" alt="..."/>
            </div>
            <div className="card-body">
              <h6 className='text-center'>{item.Name}</h6>
            </div>
            </div>
            </div>
                    )
                })
} 
        </div>
        </div>
  </div>
</div>                   
</div>
    );

}