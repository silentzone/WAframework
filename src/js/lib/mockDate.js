define(["mock"], function (Mock) {
	var _params = param.hosts
	// Mock.mock("aaa", 'get', {
	//     postDataBundleInfos: [{ applID : "1111111", applyTime : 12 , branchID : "22222222"}]
	// })
    
	Mock.mock( /http\:\/\/172\.16\.3\.1\:7122\/api\/postdatabundles$/ , {
		success : true, 
		total : 15,
		"postDataBundleInfos|15" : [{
		    id : "@guid",
			reportingDate : "@date()",
			businessDate :"@date()",
			messageDate :"@date()",
			'messageStatus|1-3': 1,
			'messageCode|+1' : 1,
			orderNo : "OrderNo",
			tradesCount : "@natural()",
			customerJobsCount : "@natural()",
			loanGuarantesCount : "@natural()",
			customerAddressCount : "@natural()",
			customersCount : "@natural()",
			pastDueCount : "@natural()",
			settleCount : "@natural()",
			cancelCount : "@natural()",
			noNeedPayCount : "@natural()"
		}]
	});
    //  _params[0].host + '/postdatabundles/byid/'
	Mock.mock( /http\:\/\/172\.16\.3\.1\:7122\/api\/postdatabundles\/byid/, {  // '/\.json/'
		success : true, 
		total : 1,
		"postDataBundleInfo" : {
		    id : "@guid",
			reportingDate : "@date()",
			businessDate :"@date()",
			messageDate :"@date()",
			'messageStatus|1-3': 1,
			'messageCode|+1' : 1,
			orderNo : "OrderNo",
			tradesCount : "@natural()",
			customerJobsCount : "@natural()",
			loanGuarantesCount : "@natural()",
			customerAddressCount : "@natural()",
			customersCount : "@natural()",
			pastDueCount : "@natural()",
			settleCount : "@natural()",
			cancelCount : "@natural()",
			noNeedPayCount : "@natural()"
		}
	});

	Mock.mock( /http\:\/\/172\.16\.3\.1\:7122\/api\/postdatabundles\/status/, 'put', {  // '/\.json/'
		success : true, 
		message  : "上报成功",
		"responseStatus " : {
		    errorCode : 1 ,
			message : "上报成功了",
			StackTrace: "test",
			Errors : [1,2,3]
		}
	});


	
 

	return Mock; 
}); 