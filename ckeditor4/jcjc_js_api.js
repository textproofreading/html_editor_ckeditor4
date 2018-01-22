


	
$("#jcjc_cuobiezi_form").on('submit', function(event){

	return false;


  event.preventDefault();
  var this_ = $(this)
  var gb_endpoint = this_.attr("data-href")
  

}
  );

function sortNumber(a,b) {
    return a - b;
}

	
	$("#btn_click_clear_text").click(function(){
		CKEDITOR.instances.editor.setData('');
	})

	$("#btn_click_clear_format").click(function(){
		var find = 'color:red';
		var re = new RegExp(find, 'g');
		
		var content_raw ;
		content_raw =  CKEDITOR.instances.editor.getData();
		content_raw = content_raw.replace(re, '');

		find = '<strong>';
		re = new RegExp(find, 'g');
		content_raw = content_raw.replace(re, '');

		find = '</strong>';
		re = new RegExp(find, 'g');
		content_raw = content_raw.replace(re, '');


		find = 'color:green';
		re = new RegExp(find, 'g');
		content_raw = content_raw.replace(re, '');



		CKEDITOR.instances.editor.setData(content_raw)
	})




    function isString (value) {
        return typeof value === 'string' || value instanceof String;
    };
    function isObject (value) {
        return value && typeof value === 'object' && value.constructor === Object;
    };

	function __process_cases(json_obj,len_total,content_raw){

		//if (json_obj.successed == false){
		//	return
		//}

		if ( isString(json_obj) ){

			json_obj = JSON.parse(json_obj);

			if ( isObject( json_obj ) ){

			}else{
				alert(json_obj);
				return ;
			}
		}
		
		var pos_arr = [];
		var unique_pos_dict = {};

		var len_tmp = 0;

		if(json_obj.hasOwnProperty('Cases')){
			if(null != json_obj.Cases && json_obj.Cases.hasOwnProperty('length')){

				var len_tmp  = json_obj.Cases.length;
				if (len_tmp <=0 ){
					//return
				}

				var _tmp_i = 0 ;
				for (;_tmp_i < len_tmp; _tmp_i ++ ){

					var _tmp_obj = json_obj.Cases[_tmp_i];
					var _tmp_pos = _tmp_obj.Pos;
					pos_arr.push( _tmp_pos );
					unique_pos_dict[ _tmp_pos ] = _tmp_obj ;

				}

			}

		}

		if(json_obj.hasOwnProperty('MarkWords')){
			
			if(null != json_obj.MarkWords && json_obj.MarkWords.hasOwnProperty('length')){
				var len_tmp_mark  = json_obj.MarkWords.length;

			var _tmp_i = 0 ;
			_tmp_i = 0 ;
			for (;_tmp_i < len_tmp_mark; _tmp_i ++ ){

				var _tmp_obj = json_obj.MarkWords[_tmp_i];
				var _tmp_pos = _tmp_obj.Pos;
				pos_arr.push( _tmp_pos );
				unique_pos_dict[ _tmp_pos ] = _tmp_obj ;



			}
		}
		}

		pos_arr.sort(sortNumber);

		var new_conent_raw = "";
		var _tmp_start_pos = 0;
		var arrayLength = pos_arr.length;
		for (var i = 0; i < arrayLength; i++) {
			if( pos_arr[i] >= len_total ){
				continue;
			}
			var str_tmp = content_raw.substring(_tmp_start_pos, pos_arr[i])
			new_conent_raw = new_conent_raw + str_tmp;

			var _tmp_obj = unique_pos_dict[ pos_arr[i] ];

			var _tmp_sub_len = _tmp_obj.WordsLen;
			//alert(_tmp_obj.ReviewWords + _tmp_obj.Error);
			if(_tmp_obj.ReviewWords){
				new_conent_raw = new_conent_raw + "<span style=\"color:green\"><strong>"+ _tmp_obj.Error +"</strong></span>"
			}else{
				new_conent_raw = new_conent_raw + "<span style=\"color:red\"><strong>"+ _tmp_obj.Error +"</strong></span>"	
			}
			
			_tmp_start_pos = pos_arr[i] + _tmp_sub_len;
		}
		str_tmp = content_raw.substring(_tmp_start_pos, len_total)
		new_conent_raw = new_conent_raw + str_tmp;

	 
	 CKEDITOR.config.font_defaultLabel = 'Arial';
		CKEDITOR.config.fontSize_defaultLabel = '16px';

		CKEDITOR.on( 'instanceReady', function( ev ) {
		ev.editor.window.$.document.body.style.fontFamily = "Arial";
		ev.editor.window.$.document.body.style.fontSize = "16px";

		});


		CKEDITOR.instances.editor.setData(new_conent_raw);
		

		 

	}



