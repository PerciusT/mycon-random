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
                  <input class="app-form-control inlineru" type="file" id="exp`+ski+`img" name="exp`+ski+`img" accept=".jpg,.jpeg,.png" placeholder="Background for xp">
                </div>`)
	}
	for(var ski=2;ski<=$('#countach').val();ski++)
	{
		$('#achsec').append(`<input class="app-form-control" type="file" id="achuser`+ski+`" name="achieve`+ski+`img" accept=".jpg,.jpeg,.png" placeholder="Background for xp">`)
        
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
                  <input class="app-form-control" name="exp`+j+`" placeholder="A bit about your xp">
                  <input class="app-form-control inlineru" name="exptitle`+j+`" placeholder="Company title">       
                  <input class="app-form-control inlineru" name="xpdate`+j+`" placeholder="Time duration" maxlength="30">
                  <input class="app-form-control inlineru" type="file" id="exp`+j+`img" name="exp`+j+`img" accept=".jpg,.jpeg,.png" placeholder="Background for xp">
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
		$('#achsec').append(`<input class="app-form-control" type="file" id="achuser`+k+`" name="achieve`+k+`img" accept=".jpg,.jpeg,.png" placeholder="Background for xp">`)
        $('#countach').val(k)
	})
	
	$('#achminus').click(function(){
		console.log("working")
		if(k!=1)
		{
			console.log("working")
			$("#achuser"+k+"").remove()
			k--
			$('#countxp').val(k)
		}
	})

})
