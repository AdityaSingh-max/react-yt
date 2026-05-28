import React from 'react'
import './App.css'
import Card from './components/Card';

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?w=150&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    nameOfCompany: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=193&h=202&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    nameOfCompany: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.5MoH8qTW_swxJ-jDBlOd8QHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    nameOfCompany: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.JM19VAZ_Zne9RxsnEpUe5gHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    nameOfCompany: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.6wPjrt0YyUpBPuP6ApKjowHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    nameOfCompany: "Netflix",
    datePosted: "3 weeks ago",
    post: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Delhi, India"
  },
  {
    brandLogo: "data:image/webp;base64,UklGRiQFAABXRUJQVlA4IBgFAACwJwCdASrRAOoAPp1Oo0ylpKMiJRNoiLATiWdu4W/K1PRT9dszeavLX2RZF/VRt1fMB+xfq+f3D1W7yN6C3lne0X5OWrR0wQ9KTvQN+6d78pDgTxi97PgR/N/t2LdzbUUqjNtRSqM21FKozbUUqjNtRSmv2B0FRnaCJatAkEogCq5XA4IBH8eepqIBzrBpKdJ/dgx6sF56lF244qcFKozFyJxSyM7a9/1aLvmQhIJRAF8vZ0V6z7MAkrstnj1j2QzkuAXDPtyrxX7QQDfAQCxzP4nSQkGP7DuYauYj7gpfp5HyJSlLa9pHFDJXAd/XkLKt0LQxhG6FpNBUYjXXWd8xbk4z/nI/Y9IeFlvlXMm6mkc+q8G81+uZE0GKcW+YG38GsabyaLRt8EzazbUUqjNtRSqM21FKozbUUqjNtRSqM21FKozEAAD+/mGAABRfCJhV56UmRFaBvfWvx/a1p6vpXK3/hAQ+IBOUBcyOLtI90AzNXO6JhZB/uuMgTHz23vOTUQdKecd7tTHYP0aGvI/3evz8n0uaAuDsgUEu/p/p+CVI7wIcV1743CIlbHABjeQuRnGl461rTQtAU84ZX4MCyUGH4MDq1kjFxftS/OKXuKzgzrhNoOrWD0sRuOyKcaU6PmxASoWRFYhQOiAjDSqHwapEumkOUuedS9a72Hg3N+Ey7DR2lKDH9e4T2feBkr9VWtWJCyR6SIEpwY9gsPmSK+FYU7RFbcXWslJEdVGlcx+5ukHHZxutTBmqqyEdeT1+wUo9fcrz9hmbizQstp03Y87UCS1fh+BU3m9m29MCcxdILY/IuL5jEDSrxyTb+fpMU6Azy1M52C/bj7prf6ShBeqjxAUbjOqCjAIYpNgoV4HB/YmctP7kpCdUXx7cv22LE98MXYMjlVv4nLDA7rr8vz6be6tgnTSzltXM+RPH96vT2uj6mPF7plfrk927V5XUGofYniyGp107bP9fpNcT/53x8W9Y2YkV0535cW2ErEA++J+TMe7o7OG1wcbl0MDeJYtZTuB8qeTE5pJS7awSOKkxHSkQSkkQkVyoaDg9I/JM6wyghF9gJ2T8/U+xXg2mfO09zkaWLTze9jgKaMET/5W6sHGrfW8wOr8NMRAA1M9FB7cER3Bla+txJfh0nPHYUKdylsfKKDeOB+kvlnOrg43Pi1kzWqrngYn8EeF3Lx1+1uKs3npWe0Ul7warq1sCZo/BAZ410n4AREKkskkZ5wi6EPOQ2jRVUwbGoECWKXNtn5RVbOVYrE+3NhfFCxjVoLB/0Z09k4N6nJN64rqcnIgD98RGGo74z4AQYlNOM7cHCPz6SrjNXyXHl5REd8JJlDf6Q+i70+TC4pSg7dFoFXEEhGwpgp4d8/7PUthRporH42DL3mjcHR6AsMNuFzIs7OSaojMCzRapaPKKnXsA1aMLA7NBAg3aaJw0O+TlMTNdmHR/FqTQ86EBqMcMc9R3QxFxuk/FC2AgiKHBXP5HBmQS6mGoHinsMzrfykRcUaPk4JmwpStFWCnNMEXvC1yZAMDvbmtwbSRnN24Urh3n5RUzE8mXi8DnEHJ4Vtj3JGQrmnvzaMY8eZeJLbu0orbUiM6xBsdcKrizglP+n3hxYDKz5XkCVnT/Vek9MzSg41Fd024yjgHKwYiYqwsyOxNXnknOYc39161+NMxk97cFJQU7M2DSqMP3jzy3bTEyPIGC1KgXb3K1xHauGhR6yJhC3aWYAAAAAA==",
    nameOfCompany: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "data:image/webp;base64,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",
    nameOfCompany: "Adobe",
    datePosted: "8 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.CYPlGA_Uvc8e6E2hnJFiJwHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    nameOfCompany: "Uber",
    datePosted: "6 weeks ago",
    post: "Data Analyst",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$30/hour",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.m1ar389tpEOAFN1NTurqvwHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    nameOfCompany: "Tesla",
    datePosted: "12 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Remote"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.SpjOSCvXUE406ZlyTxuPkwHaHk?w=193&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    nameOfCompany: "Spotify",
    datePosted: "9 weeks ago",
    post: "Node.js Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Kolkata, India"
  }
];

  return (
    <div className="parent">   
      {jobOpenings.map(function(ele,idx){
        return <Card id={idx} company={ele.nameOfCompany} datePosted={ele.datePosted} post={ele.post} tag1={ele.tag1} tag2={ele.tag2} brandLogo={ele.brandLogo} pay={ele.pay}/>
      })}   
    </div>
  )
}

export default App
