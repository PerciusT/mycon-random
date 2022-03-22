const mysql = require('mysql');
const options ={
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.MYSQL_DB,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    createDatabaseTable: true
    
}
const pool = mysql.createPool(options);
let updater = (req) => {}
	updater.updatefields = (req) => {
	  let obj=req.body
	  pool.query("Select data from data where id ='"+req.session.userId+"'",function(err,result,fields){
	              if(err)
	              {
	                console.log("error was in select data")
	                throw err
	              }
	              if(result=="")
	              {
	                console.log("Data was empty when it shouldnt be")
	                obj=""
	                return obj
	              }
	              if(result!="")
	              {
	              	result=JSON.parse(result[0].data)
	              	if(obj)
	              	{
	              		obj=result 
	              		return obj
	              	}
	                if(obj.name=="")
	                  obj.name=result.name
	                if(obj.domainhost=="")
	                  obj.domainhost=result.domainhost
	                if(obj.post=="")
	                  obj.post==result.post
	                if(obj.post2=="")
	                  obj.post2==result.post2
	                if(obj.post3=="")
	                  obj.post3==result.post3
	                if(obj.contact=="")
	                  obj.contact==result.contact
	                if(obj.email=="")
	                  obj.email==result.email
	                if(obj.location=="")
	                  obj.location==result.location
	                if(obj.dob=="")
	                  obj.dob==result.dob
	                if(obj.message=="")
	                  obj.message==result.message
	                if(obj.fb=="")
	                  obj.fb==result.fb
	                if(obj.twitter=="")
	                  obj.twitter==result.twitter
	                if(obj.linkedin=="")
	                  obj.linkedin==result.linkedin
	                if(obj.insta=="")
	                  obj.insta==result.insta
	                if(obj.countsk<result.countsk)
	                  obj.countsk==result.countsk
	                for(var ski=1;ski<=obj.countsk;ski++)
	                {
	                  if(obj['skill'+ski]=="")
	                    obj['skill'+ski]=result['skill'+ski]
	                  if(obj['skill'+ski+'s']=="")
	                    obj['skill'+ski+'s']=result['skill'+ski+'s']
	                  // console.log(obj.countsk)
	                  // skillin=','+skillin+'"'+'skill'+ski+'": "'+obj['skill'+ski]+'"\n'
	                  // skillprof=','+skillprof+'"'+'skill'+ski+'s": "'+obj['skill'+ski+'s']+'"\n'
	                }
	                if(obj.matric=="")
	                  obj.matric==result.matric
	                if(obj.date=="")
	                  obj.date==result.date
	                if(obj.fsc=="")
	                  obj.fsc==result.fsc
	                if(obj.date2=="")
	                  obj.date2==result.date2
	                if(obj.uni=="")
	                  obj.uni==result.uni
	                if(obj.date3=="")
	                  obj.date3==result.date3
	                if(obj.countxp<result.countxp)
	                  obj.countxp==result.countxp
	                for(var ski=1;ski<=obj.countxp;ski++)
	                {
	                  if(obj['exp'+ski]=="")
	                    obj['exp'+ski]=result['exp'+ski]
	                  if(obj['exptitle'+ski]=="")
	                    obj['exptitle'+ski]=result['exptitle'+ski]
	                  if(obj['xpdate'+ski]=="")
	                    obj['xpdate'+ski]=result['xpdate'+ski]
	
	                  // console.log(obj.countsk)
	                  // skillin=','+skillin+'"'+'skill'+ski+'": "'+obj['skill'+ski]+'"\n'
	                  // skillprof=','+skillprof+'"'+'skill'+ski+'s": "'+obj['skill'+ski+'s']+'"\n'
	                }
	                if(obj.countach<result.countach)
	                  obj.countach=result.countach
	  				return obj
	              }
	            })

	}
module.exports = updater