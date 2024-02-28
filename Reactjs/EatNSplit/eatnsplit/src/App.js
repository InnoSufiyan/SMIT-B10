import logo from './logo.svg';
import './App.css';
import FriendsList from './Components/FriendsList';
import AddFriend from './Components/AddFriend';
import Split from './Components/Split';
import { useEffect, useState } from 'react';
import { Advertisment, Modal, WebsiteMaintenance } from './Components/Modal';

function App() {

  const [job, setJob] = useState()
  const [keyWord, setKeyWord] = useState("")


  // console.log("Main console hun bilkul baahir")

  useEffect(() => {
    async function apiCall() {
      const response = await fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=${keyWord}&category=`)
      const res = await response.json()
      setJob(res.data)
    }

    apiCall()


  }, [keyWord])


  // const [addModal, setAddModal] = useState(true)

  // const [showAddFriendUI, setShowAddFriendUI] = useState(false)
  // const [friendsArr, setFriendsArr] = useState(
  //   [
  //     {
  //       name: "abc", imgSrc: "", paisay: "0"
  //     }, {
  //       name: "xyz", imgSrc: "", paisay: "0"
  //     }, {
  //       name: "123", imgSrc: "", paisay: "0"
  //     }
  //   ]
  // )


  // useEffect(() => {
  //   console.log("Main peda hogaya")

  // })


  return (
    // <>
    //   {/* {
    //     <Modal
    //       advertisment={<Advertisment />} websiteMaintenance={<WebsiteMaintenance />}
    //     />
    //   } */}
    //   {/* {
    //     addModal && <Modal>
    //       {true ? <>
    //         <Advertisment /> <p>asdasdsad</p> </> : <WebsiteMaintenance />}

    //     </Modal>
    //   } */}
    //   <div className='barayPappa'>
    //     <div className='leftComponent'>
    //       <FriendsList friendsArr={friendsArr} />
    //       {
    //         showAddFriendUI

    //         &&

    //         <AddFriend
    //           friendsArr={friendsArr}
    //           setFriendsArr={setFriendsArr}
    //         />
    //       }
    //       <button onClick={() => setShowAddFriendUI(!showAddFriendUI)}>
    //         {
    //           showAddFriendUI ? "Close" : "Add Friend"
    //         }
    //       </button>
    //     </div>
    //     <div className='rightComponent'>
    //       <Split />
    //     </div>
    //   </div>
    // </>
    <>
      <input placeholder='search' value={keyWord} onChange={(e) => setKeyWord(e.target.value)} />
      {
        job?.map((job, index) => <JobComponent key={index} job={job} />)
      }
    </>
  );
}

export default App;

function JobComponent({ job }) {

  useEffect(() => {

  }, [job])


  return (
    <>
      <div style={{
        backgroundColor: "lightgrey",
        borderRadius: '5px',
        marginBottom: '10px',
        textAlign: 'center'
      }}>
        <p>{job.companyName}</p>
        <p>{job.designation}</p>
        <p>{job.position}</p>
      </div>
    </>
  )
}