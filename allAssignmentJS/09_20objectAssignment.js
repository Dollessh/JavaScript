let teacher = {
    studDetails: {
        sName: "Dollesh Rathod",
        sDOB: "03 May 1998",
        sMoNo: 9923502416,

    },

    sQualification: {

        sDegree: {
            sCollege: "SSGMCE",
            // sDegree: "BE",
            sPassOut: 2021,
            sStream: "IT"
        },
        sDiploma: {
            sDipCollege: "RRK Poly",
            sDiplomaStream: "CSE",
            sDipPassout: 2018
        },
        sHsc: {
            sJrCollege: "MJ",
            sJrStream: "GS",
            SJePassout: 2015
        },
        sSsc: {
            sSscSchool: "BCC",
            sSscBoard: "CBSE",
            sSscPassout: 2013
        }
    },
    allQualification : function(){
        return teacher.sQualification;
    },






    sCertification: {

        firstCertificate: "Data Structure and Algorithm in Java",
        secondCertificate: "Complete C++",
        thirdCertificate: "Certification In Advance Programming"
    },
    concatCertificate: function () {
        var allCertificate = teacher.sCertification.firstCertificate + "," + teacher.sCertification.secondCertificate + "," + teacher.sCertification.thirdCertificate;
        return allCertificate;
    }

}

var result = teacher.concatCertificate();
console.log(result);
// var res = ;
console.table(teacher.allQualification());



console.log("=========== in operator================");
let isAvailable = "fullName" in mohitPerson;
console.log(isAvailable);
console.log("city" in mohitPerson);
console.log("===========================");
