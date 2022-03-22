$(document).ready(function() {
	if($('#countsk').val()==0)
	{
		$('#countsk').val(1)
	}
	if($('#countxp').val()==0)
	{
		$('#countxp').val(1)
	}
	if($('#countach').val()==0)
	{
		$('#countach').val(1)
	}
	for(var ski=2;ski<=$('#countsk').val();ski++)
	{
		$('#skillsec').append(`<div class="app-form-group" id="skillsuser`+ski+`">
        <input class="app-form-control inliners" name="skill`+ski+`" placeholder="Edit Skill `+ski+`" maxlength="30" >
        <input class="app-form-control inliners" name="skill`+ski+`s" placeholder="Edit Proficiency" maxlength="3" pattern="^\\d+$" title="Please input numbers only">
        </div>`)
	}
	for(var ski=2;ski<=$('#countxp').val();ski++)
	{
		$('#xpsec').append(`<div class="app-form-group" id="xpuser`+ski+`">
                  <input class="app-form-control" name="exp`+ski+`" placeholder="edit your xp">
                  <input class="app-form-control inlineru" name="exptitle`+ski+`" placeholder="Company title">       
                  <input class="app-form-control inlineru" name="xpdate`+ski+`" placeholder="Time duration" maxlength="30">
                 <div class="righter inlineru" style="margin-left:50px; ">
                              <input class="app-form-control inputfile " type="file" id="exp`+ski+`img" name="exp`+ski+`img" accept=".jpg,.jpeg,.png" placeholder="Background for xp">
                              <label for="exp`+ski+`img" class="labelreceipt usersizer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> <span>Background</span></label>
                              <br>
                          </div>
                </div>`)
	}
	for(var ski=2;ski<=$('#countach').val();ski++)
	{
		$('#achsec').append(`<div class="righter" id="achitem`+ski+`">
                      <input class="app-form-control inputfile" type="file" id="achuser`+ski+`" name="achieve`+ski+`img" accept=".jpg,.jpeg,.png" placeholder="Achievement">
                      <label for="exp`+ski+`img" class="labelreceipt usersizer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> <span>Custom `+ski+`</span></label>
                      <br>
                    </div>`)
        
	}
	var i= $('#countsk').val()
	$('#skplus').click(function(){
		i++
		$('#skillsec').append(`<div class="app-form-group" id="skillsuser`+i+`">
        <input class="app-form-control inliners" name="skill`+i+`" placeholder="Add Skill `+i+`" maxlength="30" >
        <input class="app-form-control inliners" name="skill`+i+`s" placeholder="Add Proficiency" maxlength="3" pattern="^\\d+$" title="Please input numbers only">
        </div>`)
        $('#countsk').val(i)
	})
	
	$('#skminus').click(function(){
		
		if(i!=1)
		{
			$("#skillsuser"+i+"").remove()
			i--
			$('#countsk').val(i)
		}
	})
	var j= $('#countxp').val()
	$('#xpplus').click(function(){
		j++
		$('#xpsec').append(`<div class="app-form-group" id="xpuser`+j+`">
                  <input class="app-form-control" name="exp`+j+`" placeholder="Add an experience">
                  <input class="app-form-control inlineru" name="exptitle`+j+`" placeholder="Company title">       
                  <input class="app-form-control inlineru" name="xpdate`+j+`" placeholder="Time duration" maxlength="30">
                 <div class="righters inlineru" style="margin-left:50px; ">
                              <input class="app-form-control inputfile " type="file" id="exp`+j+`img" name="exp`+j+`img" accept=".jpg,.jpeg,.png" placeholder="Background for xp">
                              <label for="exp`+j+`img" class="labelreceipt usersizer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> <span>Background</span></label>
                              <br>
                          </div>
                </div>`)
        $('#countxp').val(j)
	})
	
	$('#xpminus').click(function(){
		console.log("working")
		if(j!=1)
		{
			console.log("working")
			$("#xpuser"+j+"").remove()
			j--
			$('#countxp').val(j)
		}
	})
	var k= $('#countach').val()
	$('#achplus').click(function(){
		k++
		$('#achsec').append(`<div class="righter" id="achitem`+k+`">
                      <input class="app-form-control inputfile" type="file" id="achuser`+k+`" name="achieve`+k+`img" accept=".jpg,.jpeg,.png" placeholder="Achievement">
                      <label for="achuser`+k+`" class="labelreceipt usersizer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> <span>Custom `+k+`</span></label>
                      <br>
                    </div>`)
        $('#countach').val(k)
	})
	
	$('#achminus').click(function(){
		console.log("working")
		if(k!=1)
		{
			console.log("working")
			$("#achitem"+k+"").remove()
			k--
			$('#countxp').val(k)
		}
	})

})
