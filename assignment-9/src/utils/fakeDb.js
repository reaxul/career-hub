// const addToDb = id => {
    
//     let jobIds = localStorage.getItem('jobIds');
//      if (!jobIds) {
//         jobIds = {};
//      }
//      else if (jobIds.includes(id)) {
//         alert('You have already applied for this job!');
//         return;
//       }
//      else {
//         jobIds = JSON.parse(jobIds);
//     }

//     jobIds.push(id);
//     localStorage.setItem('jobIds', JSON.stringify(jobIds));
// }
const addToDb = id => {
    let jobIds = localStorage.getItem('jobIds');
     if (!jobIds) {
        jobIds = [];
     }
     else if (jobIds.includes(id)) {
        alert('You have already applied for this job!');
        return;
      }
     else {
        jobIds = JSON.parse(jobIds);
    }

    jobIds.push(id);
    localStorage.setItem('jobIds', JSON.stringify(jobIds));
}
const appliedJobId = () => {
    let appliedJob=[]
    const previousApplied = localStorage.getItem('jobIds');
    if (previousApplied) {
        appliedJob=JSON.parse(previousApplied)
    }
    return appliedJob
}
export { addToDb ,appliedJobId }
