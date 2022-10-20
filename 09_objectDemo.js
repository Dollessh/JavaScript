let teacher = {
        name: "Dollesh Rathod",
        subject: "Angular",
        degrees :{
            graduation: "BE from CSE",
            postGraduation : "ME from Data Science",
            phd : "Advance Computing"
        },
        certification :{
            firstCertificate : "Hacker Rank Participation",
            secondCertificate :"Certificate in IFE course",
            thirdCertificate :"Certificate in Advance Programming"
        },
        allDegrees :function() {
            var totalDegrees = teacher.degrees.graduation +", "+ teacher.degrees.postGraduation +", " + teacher.degrees.phd;
            console.log(totalDegrees);
        }
}

console.log(`Total Degrees Of Teacher = ${teacher.allDegrees()}`);