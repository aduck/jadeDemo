/* 常用正则
	regEmail=/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/ // email
	regPhone=/^(((1[0-9][0-9]{1}))+\d{8})$/  // 手机号
	regPwd=/^[a-z0-9_-]{6,18}$/  // 密码
*/

function checkAll(arr){
	for(var i=0,len=arr.length;i<len;i++){
		var item=document.getElementById(arr[i]['id']),
			val=typeof String.prototype.trim !='undefined' ? item.value.trim() : item.value.replace(/(^\s*)|(\s*$)/g,""),
			rules=arr[i]['rules'],
			title=arr[i]['title'],
			res=check(val,title,rules);
		if(res.error) return res;
	}
	return true;
}

function check(val,title,rules){
	for(var i=0,len=rules.length;i<len;i++){
		var rule=rules[i];
		if(rule=='required'){
			if(val==''){
				return {"error":1,"title":title,"msg":"不能为空"};
			}
		}else{
			if(!rule.test(val)){
				return {"error":1,"title":title,"msg":"不符合规则"};
			}
		}
	}
	return {"error":0};
}