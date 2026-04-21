import Card from './components/card'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sSeQqjaUTuZ3gRgkKjidpaipF_l6s72lBw&s",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "₹25-40 LPA",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    companyName: "Amazon",
    datePosted: "1 day ago",
    post: "SDE I",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "₹18-28 LPA",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/027/127/473/small/microsoft-logo-microsoft-icon-transparent-free-png.png",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "Software Engineer II",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "₹30-45 LPA",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "5 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "₹40-60 LPA",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://w7.pngwing.com/pngs/153/31/png-transparent-netflix-macos-bigsur-icon-thumbnail.png",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "₹50-80 LPA",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    companyName: "Meta",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "₹35-55 LPA",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sSeQqjaUTuZ3gRgkKjidpaipF_l6s72lBw&s",
    companyName: "Google",
    datePosted: "6 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "₹45-70 LPA",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "SDE II",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "₹28-45 LPA",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/027/127/473/small/microsoft-logo-microsoft-icon-transparent-free-png.png",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "₹30-50 LPA",
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "2 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "₹50-75 LPA",
    location: "Bangalore, India"
  }
];
  console.log(jobOpenings)

  return (
    <div className='parent'>
       {jobOpenings.map(function(elem){
          return <Card company={elem.companyName} post ={elem.post} tag1 ={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} datePosted={elem.datePosted}/>
       })}
    </div>
  )
}

export default App