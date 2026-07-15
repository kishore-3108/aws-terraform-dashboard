import Head from 'next/head'

export default function Home() {
  // NEE TERRAFORM DATA IKKADA MARCHU
  const data = {
    public_ip: "34.201.123.45", // nee actual EC2 IP
    instance_id: "i-0a1b2c3d4e5f6g7h8",
    s3_bucket: "kishore-tf-bucket-3108",
    region: "us-east-1"
  }

  // AWS COST CALCULATION
  const ec2Hourly = 0.0104  // t2.micro price us-east-1
  const s3PerGB = 0.023     // S3 Standard per GB
  const hoursInMonth = 730
  
  const ec2Monthly = (ec2Hourly * hoursInMonth).toFixed(2)
  const s3MonthlyCost = (s3PerGB * 1).toFixed(2) // 1GB ani assume
  const totalMonthly = (parseFloat(ec2Monthly) + parseFloat(s3MonthlyCost)).toFixed(2)
  const dailyCost = (totalMonthly / 30).toFixed(2)

  return (
    <>
      <Head>
        <title>AWS Terraform Dashboard | Kishore</title>
        <meta name="description" content="Live AWS Infrastructure Dashboard built with Terraform" />
      </Head>

      <div style={{fontFamily: 'system-ui, Arial', background:'#0f172a', color:'white', minHeight:'100vh', padding:'20px'}}>
        
        {/* WARNING BANNER */}
        <div style={{background:'#dc2626', color:'white', padding:'12px', textAlign:'center', borderRadius:'8px', marginBottom:'20px', fontWeight:'bold'}}>
          ⚠️ WARNING: This AWS infrastructure costs money. Run `terraform destroy` after demo to avoid charges
        </div>

        {/* HEADER */}
        <h1 style={{textAlign:'center', fontSize:'32px', marginBottom:'10px'}}>
          🚀 AWS Infrastructure Dashboard
        </h1>
        <p style={{textAlign:'center', color:'#94a3b8', marginBottom:'30px'}}>
          Built with Terraform + Next.js + Vercel
        </p>

        {/* RESOURCE CARDS */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'20px', maxWidth:'1100px', margin:'0 auto'}}>
          
          <div style={{background:'#1e293b', padding:'20px', borderRadius:'12px', border:'1px solid #334155'}}>
            <h3 style={{marginTop:0}}>🖥️ EC2 Instance</h3>
            <p><b>Instance ID:</b> {data.instance_id}</p>
            <p><b>Public IP:</b> <a href={`http://${data.public_ip}`} target="_blank" style={{color:'#38bdf8'}}>{data.public_ip}</a></p>
            <p><b>Region:</b> {data.region}</p>
            <p><b>Type:</b> t2.micro</p>
            <p><b>Status:</b> <span style={{color:'#4ade80'}}>Running ✅</span></p>
          </div>

          <div style={{background:'#1e293b', padding:'20px', borderRadius:'12px', border:'1px solid #334155'}}>
            <h3 style={{marginTop:0}}>🪣 S3 Bucket</h3>
            <p><b>Bucket Name:</b> {data.s3_bucket}</p>
            <p><b>Region:</b> {data.region}</p>
            <p><b>Storage:</b> 1 GB</p>
            <p><b>Status:</b> <span style={{color:'#4ade80'}}>Active ✅</span></p>
          </div>

          <div style={{background:'#1e293b', padding:'20px', borderRadius:'12px', border:'1px solid #334155'}}>
            <h3 style={{marginTop:0}}>🏗️ Terraform Info</h3>
            <p><b>Provider:</b> AWS</p>
            <p><b>State:</b> Local</p>
            <p><b>Resources:</b> 2</p>
            <p><b>Last Deployed:</b> 2026-04-04</p>
          </div>

        </div>

        {/* COST ESTIMATOR CARD */}
        <div style={{maxWidth:'1100px', margin:'40px auto', background:'linear-gradient(135deg, #f59e0b, #dc2626)', padding:'25px', borderRadius:'12px'}}>
          <h2 style={{marginTop:0}}>💰 Estimated AWS Cost</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'15px', marginTop:'15px'}}>
            <div style={{background:'rgba(0,0,0,0.3)', padding:'15px', borderRadius:'8px'}}>
              <p style={{margin:'0', fontSize:'12px', opacity:0.8}}>EC2 t2.micro</p>
              <p style={{margin:'5px 0 0 0', fontSize:'24px', fontWeight:'bold'}}>${ec2Monthly}<span style={{fontSize:'14px'}}>/mo</span></p>
            </div>
            <div style={{background:'rgba(0,0,0,0.3)', padding:'15px', borderRadius:'8px'}}>
              <p style={{margin:'0', fontSize:'12px', opacity:0.8}}>S3 Storage 1GB</p>
              <p style={{margin:'5px 0 0 0', fontSize:'24px', fontWeight:'bold'}}>${s3MonthlyCost}<span style={{fontSize:'14px'}}>/mo</span></p>
            </div>
            <div style={{background:'rgba(0,0,0,0.4)', padding:'15px', borderRadius:'8px', border:'2px solid white'}}>
              <p style={{margin:'0', fontSize:'12px', opacity:0.8}}>Total / Month</p>
              <p style={{margin:'5px 0 0 0', fontSize:'28px', fontWeight:'bold'}}>${totalMonthly}</p>
            </div>
          </div>
          <p style={{marginTop:'15px', fontSize:'14px'}}>Approx <b>${dailyCost}/day</b> | *Prices for us-east-1 region</p>
        </div>

        {/* COMMANDS SECTION */}
        <div style={{maxWidth:'1100px', margin:'20px auto', background:'#1e293b', padding:'20px', borderRadius:'12px', border:'1px solid #334155'}}>
          <h2 style={{marginTop:0}}>🛠️ Terraform Commands</h2>
          <div style={{background:'#0f172a', padding:'15px', borderRadius:'8px', fontFamily:'monospace', fontSize:'14px'}}>
            <p style={{margin:'5px 0', color:'#94a3b8'}}># Initialize</p>
            <p style={{margin:'5px 0'}}>terraform init</p>
            <br/>
            <p style={{margin:'5px 0', color:'#94a3b8'}}># Create Infrastructure</p>
            <p style={{margin:'5px 0'}}>terraform apply</p>
            <br/>
            <p style={{margin:'5px 0', color:'#94a3b8'}}># Destroy to save money</p>
            <p style={{margin:'5px 0', color:'#dc2626'}}>terraform destroy</p>
          </div>
        </div>

        {/* FOOTER */}
        <footer style={{textAlign:'center', marginTop:'50px', color:'#64748b', fontSize:'14px'}}>
          Made by Kishore | GitHub: kishore-3108
        </footer>
      </div>
    </>
  )
}