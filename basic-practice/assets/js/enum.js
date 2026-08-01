"use strict";
var Status;
(function (Status) {
    Status["pending"] = "PENDING";
    Status["approved"] = "APPROVED";
    Status["rejected"] = "REJECTED";
})(Status || (Status = {}));
function checkStatus(currentStatus) {
    if (currentStatus === Status.approved) {
        console.log("Application Approve");
    }
    else if (currentStatus === Status.rejected) {
        console.log("Application Reject");
    }
}
checkStatus(Status.rejected);
