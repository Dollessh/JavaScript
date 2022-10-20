let teacher = {
    teacherName: "Gajanan Kharat Sir",
    subject: "Angular",
    organization:"Codemind Technology",
    degrees :{
        graduation : "IT Engineering",
        pHD : "Adv Computing",
        postGraduation :"Full Stack Web Developer",   
    },
    certification :{
        firstCertificate : "Hacker RAnk Participation",
        secondCertificate : "Certificate in IFE COurse",
        thirdCertificate : "Certificate in Adv Programming"
    },
    allDegrees : function()
    {
        var displayAllDegrees = teacher.degrees.graduation + ", " + teacher.degrees.pHD + ", "+ teacher.degrees.postGraduation;
        console.log(`Teacher Degrees are ${displayAllDegrees} and Total degrees are = 3 `);
    },
    hod: "Dhanaji Sir",
}


console.log("===============================Output======================================");
console.log(`Name of Teacher = ${teacher.teacherName}`);
console.log("======================");
console.log(`Display All Degrees = ${teacher.allDegrees()}` );
console.log("======================");
console.log(`Before Modify the subject is= ${teacher.subject} `);
console.log("======================");
teacher.subject = "React";
console.log(`After Modify the subject is= ${teacher.subject} `);
console.log("Entries in Certification =" + Object.entries(teacher.certification));
console.log("======================");
console.log("Entries in Certification  = " +Object.keys(teacher.certification));
console.log("======================");
console.log(("Entries in Certification = " +Object.values(teacher.certification)));
console.log("======================");
delete teacher.certification.thirdCertificate;
console.log("After deleting one certificate from Certification = "  +Object.values(teacher.certification));
console.log("======================");
teacher.certification.fourthCertificate = "Data Structure and Algo";
console.log("Added New Certificate = " + teacher.certification.fourthCertificate);
console.log("======================");
console.log("Nested Object Certificate = 1) " + teacher.certification.firstCertificate + "2) " + teacher.certification.secondCertificate + " 4)"+ teacher.certification.fourthCertificate);


