//待办事项
function loadTopTip() {
	$.ajax({
		type : "post",
		async : true,
		url : "getWaitTaskAction",//待办任务
		success : function(result, textStatus) {
			if (result.count) {
				$("#taskCount").text(result.count);
			}
			delete result;
		},
		error : function() {
			// 请求出错处理
		}
	});
	$.ajax({
		type : "post",
		async : true,
		url : "getPortalNotesAction",//通知
		success : function(result, textStatus) {
			var news = result.data;
			if (typeof news.data == "string") {
				news.data = window.eval("(" + news.data + ")");
			}
			$("#notesCount").text(news.data.length);
			delete news;
			delete result;
		},
		error : function() {
			// 请求出错处理
		}
	});
	$.ajax({
		type : "post",
		async : true,
		url : "loadNewsAction",//新闻
		success : function(result, textStatus) {
			var news = result.data;
			if (typeof news.data == "string") {
				news.data = window.eval("(" + news.data + ")");
			}
			$("#newsCount").text(news.data.length);
			delete news;
			delete result;
		},
		error : function() {
			// 请求出错处理
		}
	});
	$.ajax({
		type : "post",
		async : true,
		url : "getPortalBofoAction",//发帖
		success : function(result, textStatus) {
			var news = result.data;
			if (typeof news.data == "string") {
				news.data = window.eval("(" + news.data + ")");
			}
			$("#topicCount").text(news.data.length);
			delete news;
			delete result;
		},
		error : function() {
			// 请求出错处理
		}
	});
	setTimeout(loadTopTip, 60 * 1000);
}
loadTopTip();

//实时监控
function refreshMonitorInfo(){
	  $.ajax({
			type : "post",
			async : true,
			url : "getCPUPercAction",
			success : function(data, textStatus) {
				try {
					if (data.data) {
						data = window["eval"]("(" + data.data.data + ")");
					} else {
						data = {};
					}
					var usedpex = data.usedpex||0;
					if(usedpex<30){
						$("#cpuprs").attr("class","layui-progress-bar");
					}else if(usedpex<80){
						$("#cpuprs").attr("class","layui-progress-bar layui-bg-blue");
					}else{
						$("#cpuprs").attr("class","layui-progress-bar layui-bg-red");
					}
					layui.element.progress("progress-cpuprs",usedpex+"%");
				} catch (e) {
				}
				delete data;
			}
		});
	  $.ajax({
			type : "post",
			async : true,
			url : "getMemoryInfoAction",
			success : function(data, textStatus) {
				try {
					if (data.data) {
						data = window["eval"]("(" + data.data.data + ")");
					} else {
						data = {};
					}
					var usedpex = data.usedpex||0;
					if(usedpex<50){
						$("#memprs").attr("class","layui-progress-bar");
					}else if(usedpex<80){
						$("#memprs").attr("class","layui-progress-bar layui-bg-blue");
					}else{
						$("#memprs").attr("class","layui-progress-bar layui-bg-red");
					}
					layui.element.progress("progress-memprs",usedpex+"%");
				} catch (e) {
				}
				delete data;
			}
		});
	  setTimeout(refreshMonitorInfo,1000);
}
refreshMonitorInfo();