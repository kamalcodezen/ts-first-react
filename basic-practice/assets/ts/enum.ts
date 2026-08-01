enum Status {
  pending = "PENDING",
  approved = "APPROVED",
  rejected = "REJECTED",
}

function checkStatus(currentStatus: Status) {
  if (currentStatus === Status.approved) {
    console.log("Application Approve");
  } else if (currentStatus === Status.rejected) {
    console.log("Application Reject");
  }
}

checkStatus(Status.rejected);
