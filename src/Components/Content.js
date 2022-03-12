
import { Avatar, Box, Button,Grid, IconButton, InputBase, Paper, Stack, TextField, Typography } from '@mui/material'
import React, {  useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'

function Content() {
    
  const[organisationphone,setOrganisationPhone]=useState('');
  const[organisationemail,setOrganisationEmail]=useState('');
  const[organisationoosanumber,setOrganisationOosaNumber]=useState('');
  const[organisationtitle,setOrganisationTitle]=('');
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[contactTitle,setContactTitle]=useState('');
    const[jobTitle,setJobTitle]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[organisationwebsite,setOrganisationWebsite]=useState('');
    const[organisationfacebook,setOrganisationFacebook]=useState('');
    const[organisationinstagram,setOrganisationInstagram]=useState('');
    const[organisationyoutube,setOrganisationYoutube]=useState('');
    const[organisationtwitter,setOrganisationTwitter]=useState('');
    const[organisationpostcode,setOrganisationPostcode]=useState('');
    const[organisationstreet,setOrganisationStreet]=useState('');
  const[organisationtown,setOrganisationTown]=useState('')
  const[organisationcountry,setOrganisationCountry]=useState('')
    
  const[organisationbuildingNo,setOrganisationBuildingNo]=useState('');
    const postdata = () => {
        
        axios.post('https://api2.fmd-direct.co.uk/api/schools/store',
        
          {
            organisationoosanumber,
            organisationphone,
            organisationemail,
            organisationtitle,
            contactTitle,
            jobTitle, 
            firstName,
            lastName,
           email, phone,
           organisationwebsite,
organisationfacebook,
organisationinstagram,
organisationyoutube,
organisationtwitter,
organisationbuildingNo,
organisationstreet,
organisationpostcode,
organisationtown,
organisationcountry,
        })
      
    } 
    
    // useEffect(() => {
    //     axios.post('https://api2.fmd-direct.co.uk/api/schools/store',
    //     {headers:{"Authorization":`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNmNlN2E0YTk0ZGZiZWFmZGI2Zjk3MWFkNmY4MjcwYjgwNzkzNWMxOTUyY2FkOTc3YzVkYTk2NGIxOGI3YWVhYTc0YzUzOWFhZmMwMDVmMWIiLCJpYXQiOjE2NDY4MDk2MDcuNTc3MzAwMDcxNzE2MzA4NTkzNzUsIm5iZiI6MTY0NjgwOTYwNy41NzczMDE5NzkwNjQ5NDE0MDYyNSwiZXhwIjoxNjc4MzQ1NjA3LjU3NDE2ODkyMDUxNjk2Nzc3MzQzNzUsInN1YiI6IjEwNCIsInNjb3BlcyI6W119.h5p-tlwJBo2Cdii5g3tfRMxeSFDAJfUIDDPQT_GDo2B_Dj00_F6A2ZSy-R2xJM8D0G204I3JUszR5hblCqmeDoojlerQCdxogzx7vic6Wh1--bi4mACrlODyQc-ZQjZyVzTggMnUGZsZqtilEj6ARkFmwPbcw4xtN86FQ6zzlygZtTlpoqkT3P0Rgup-08fG3SVYcSZLtDbyFihKL0WKR2iAFXr4onU93vuCAV-eeT_QpvyzhzCgjEQk9fS9YevXbloP-Swx8Cq-bQR4CaQBgw4RWgIK0vkaAC3OlWxpvvK_p8rwYlzEWlmEKI6U7nQfm2aryBDLhZ9baAxujaV93uTJuctlr_roI3WWcow1Y1ZeyfiTThq-ce7W6JrJ3BO0MPVC-MUmhKyxrpkHFqkrsOzigCkG8JHlz27Hh-k0UYR7L9Xl8Y3l5Zjrftsmmj5CjeYocumHL04Kz6gjRZKvbCewCVwRP1Dac4Hbh1iVF6QERxdxA4AGf8yMXUqydB34XTutdJzuVlR4x0kjm_MeaPFWQzG4cIekaVeuo73XTiye5tyhNGE_qf022iiWnhFXnT5jNPoOpr4Kc3EWZZx1_vR6wOVKWcjzghY_5hTc57TFgq60kjT0xqLAeTPxspMXAbiwCsm6Y9zd2KMSgoC9SZHn-9c-oqTuq6eQAn0N6q8`}}).then((response) => {
    //         console.log("1",response.data)
    //         // setState(response.data.data)
    //         // setLoading(false);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //       });
    // }, []);
  return (
      <div>
           
   <Box sx={{ mt:18,ml:30,backgroundColor:"white",}}>
   <Paper sx={{ mt:2,ml:3,backgroundColor:"gray" }}>

      <Grid container spacing={2} sx={{ml:1,mt:2}} >

       <Grid item xs={12} md={8} lg={8} >
         <Paper     sx={{
           p: 2,
           display: 'flex',
           flexDirection: 'column',
           height:100,
          
}}>
         <Typography  component="h1" variant="h6"
     color="inherit"
     noWrap
     sx={{ flexGrow:1  ,color:"blue",}} >
   Search Schools
 
   </Typography>
   <Paper
         component="form"
         sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
         lg={6}>
          <InputBase
sx={{ ml: 9, flex: 1}}
placeholder="Postcode"
inputProps={{ 'aria-label': 'Postcode' }}
/> 

<IconButton type="submit" sx={{ p: '10px' }} aria-label="search"><SearchIcon /></IconButton>
</Paper>
    </Paper>
        <Paper  sx={{
           p: 2,
           display: 'flex',
           flexDirection: 'column',
           height: 450,mt: 2
         }}>         <Box
         component="form"
         sx={{
         '& .MuiTextField-root': { m:1, width: '15 ch' },
         }}
         noValidate
         autoComplete="off">
    <Typography  component="h1"
     variant="h6"
     color="inherit"
     noWrap
     
     sx={{ flexGrow:1 ,     color:"blue",}}>
   School Overview
   </Typography>  
   <div>
<TextField  
onChange={(e) =>setOrganisationTitle(e.target.value)}
     required
     placeholder='School Name'
     id="organisationtitle"
     
     name="organisationtitle"
     autoComplete="organisationtitle"
     autoFocus/>
       <TextField 
       onChange={(e) => setOrganisationOosaNumber(e.target.value)} 
     required
     placeholder='Registration Number'
     id="organisationoosanumber"
     name="organisationoosanumber"
     autoComplete="organisationoosanumber"
     autoFocus/>
</div>
<div>
<TextField  
onChange={(e) => setOrganisationEmail(e.target.value)}
     required
     placeholder='School Email Address'
     id="School  Email Address"
     name="School Email Address"
     autoComplete="School Email Address"
     autoFocus/>
       <TextField  
       onChange={(e) => setOrganisationPhone(e.target.value)}
     required
     placeholder='School Phone Number'
     id="organisationphone"
     name="organisationphone"
     autoComplete="organisationphone"
     autoFocus/>
</div>
<Typography  component="h1"
     variant="h6"
     color="inherit"
     noWrap
     sx={{ flexGrow:1,     color:"blue", }}>
   School Address
   </Typography> 
   <div>
<TextField  
onChange={(e) => setOrganisationBuildingNo(e.target.value)}
     required
     placeholder='Buliding No'
     id="organisationbuildingnameNo"
     name="organisationbuildingnameNo"
     autoComplete="organisationbuildingnameNo"
     autoFocus/>
       <TextField  
       onChange={(e) => setOrganisationCountry(e.target.value)}
     required
     placeholder='Country'
     id="organisationcountry"
     name="organisationcountry"
     autoComplete="organisationcountry"
     autoFocus/>
</div>
<div>
<TextField  
onChange={(e) => setOrganisationStreet(e.target.value)}
     required
     placeholder='Street'
     id="organisationstreet"
     name="organisationstreet"
     autoComplete="organisationstreet"
     autoFocus/>
       <TextField
       onChange={(e) => setOrganisationPostcode(e.target.value)}  
     required
     placeholder='Postcode'
     id="organisationpostcode"
     name="organisationpostcode"
     autoComplete="organisationpostcode"
     autoFocus/>
</div>
<div>
<TextField  
  onChange={(e) => setOrganisationTown(e.target.value)}
     required
     placeholder='Town'
     id="organisationtown"
     name="organisationtown"
     autoComplete="organisationtown"
     autoFocus/>
</div>
</Box>
    </Paper>
   
    <Paper
         sx={{
           p: 2,
           display: 'flex',
           flexDirection: 'column',
           height: 240,
           color:"blue",mt: 2,
         }}
       >
   
   <Box
component="form"
sx={{
'& .MuiTextField-root': { m:1, width: '15 ch' },
}}
noValidate
autoComplete="off"
>
    <Typography  component="h1"
     variant="h6"
     color="inherit"
     noWrap
     sx={{ flexGrow:1,     color:"blue", }}>
   Contact Information
   </Typography>
<div>
<TextField  
onChange={(e) => setContactTitle(e.target.value)}
     required
     placeholder='Title'
     id="ContactTitle"
     name="ContactTitle"
     autoComplete="ContactTitle"
     autoFocus/>

<TextField 
onChange={(e) => setJobTitle(e.target.value)} 
     required
     placeholder='Job Title'
     id="jobTitle"
     name="jobTitle"
     autoComplete="jobTitle"
     autoFocus/>

</div>
<div>
<TextField  
onChange={(e) => setFirstName(e.target.value)}
     required
     placeholder='First Name'
     id="FirstName"
     name="FirstName"
     autoComplete="FirstName"
     autoFocus/>
       <TextField  
       onChange={(e) => setLastName(e.target.value)}
     required
     placeholder='Last Name'
     id="LastName"
     name="LastName"
     autoComplete="LastName"
     autoFocus/>
</div>
<div>
<TextField  
onChange={(e) => setEmail(e.target.value)}
     required
     placeholder='Email Address'
     id="email"
     name="email"
     autoComplete="email"
     autoFocus/>
       <TextField  
       onChange={(e) => setPhone(e.target.value)}
     required
     placeholder='Contact Number'
     id="phone"
     name="phone"
     autoComplete="phone"
     autoFocus/>
</div>
</Box>
  </Paper>
</Grid>







     <Grid item xs={12} md={3.5} lg={3.5}>
     <Paper
         sx={{
           p: 2,
           display: 'flex',
           flexDirection: 'column',
           height: 150,
           color:"blue",
         }}
       >
        <Typography  component="h1"
     variant="h6"
     color="inherit"
     noWrap
     sx={{ flexGrow:1 }}>
   Media
   </Typography> 
<Stack>
<Avatar sx={{ width:50, height:50 ,backgroundColor:"gray" }} alt="" src="/static/images/avatar/1.jpg" />
</Stack>
    <Button type="submit"
     fullWidth
     variant="contained"
     sx={{ mt: 3, mb: 2 ,width:'20ch',height:'30px',backgroundColor:"blue" }}
   >
    Upload 
   </Button>
       </Paper>
       <Paper
         sx={{
           p: 2,
           display: 'flex',
           flexDirection: 'column',
           height: 450,mt: 2
         
         }}
       >
               <Box
component="form"
sx={{
'& .MuiTextField-root': { m:1, width: '15 ch' },
}}
noValidate
autoComplete="off"
>
<Typography  component="h1"
     variant="h6"
     color="inherit"
     noWrap
     sx={{ flexGrow:1 ,     color:"blue",}}>
   Links
   </Typography> 
   <div sx={{ flexGrow:1 }}>
   <TextField  
    onChange={(e) => setOrganisationWebsite(e.target.value)}
     required
     placeholder='Website'
     id="organisationwebsite"
     name="organisationwebsite"
     autoComplete="organisationwebsite"
     autoFocus/>

<TextField  
 onChange={(e) =>setOrganisationFacebook(e.target.value)}
     required
     placeholder='Facebook'
     id="organisationfacebook"
     name="organisationfacebook"
     autoComplete="organisationfacebook"
     autoFocus/>

<TextField  
 onChange={(e) =>setOrganisationInstagram (e.target.value)}
     required
     placeholder='Instagram'
     id="organisationinstagram"
     name="organisationinstagram"
     autoComplete="organisationinstagram"
     autoFocus/>
       <TextField  
        onChange={(e) =>setOrganisationYoutube (e.target.value)}
     required
     placeholder='Youtube'
     id="organisationyoutube"
     name="organisationyoutube"
     autoComplete="organisationyoutube"
     autoFocus/>
       <TextField 
       onChange={(e) =>setOrganisationTwitter (e.target.value)} 
     required
     placeholder='Twitter'
     id="organisationtwitter"
     name="organisationtwitter"
     autoComplete="organisationtwitter"
     autoFocus/>
      </div> 
   
</Box>
       
       </Paper>
       <Paper
         sx={{
           p: 2,
           display: 'flex',
           flexDirection: 'column',
           height: 100,mt: 2
         }}
       >
    <Button 
     type="submit"
  
     variant="contained"
     sx={{ mt: 3, mb: 2 ,width:'20ch',height:'30px',backgroundColor:"green"}}
     onClick={postdata}
   >
    Save&Continue
   </Button>
       </Paper>
     </Grid>
     </Grid>
       </Paper>   
   </Box>
   
  
  </div>
  )
}

export default Content