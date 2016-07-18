function check(){
	return 'placeholder' in document.createElement('input') ? true : false;
}

function fix(){
	$(':input[placeholder]').each(function(){
		var self=$(this),
			txt=self.attr('placeholder'),
			pl=self.css('paddingLeft'),
			height=parseInt(self.outerHeight(true));
		self.wrap('<div style="position:relative;display:inline-block;*display:inline;*zoom:1;"></div>');
		var $holder=$('<txt/>').text(txt).css({position:"absolute",left:"0",top:"0",height:height+"px",lineHeight:height+"px",paddingLeft:pl,color:"#999"}).appendTo(self.parent());
		self.focusin(function(){
			$holder.hide();
		}).focusout(function(){
			if(!self.val()) $holder.show();
		})
		$holder.click(function(){
			$holder.hide();
			self.focus();
		})
	})
}

if(!check()) fix();