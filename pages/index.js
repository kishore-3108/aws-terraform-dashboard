import Head from 'next/head'

export default function Home() {
  // Ikkada nee terraform output pettu
  const data = {
    public_ip: "34.201.123.45", // nee actual IP pettu
    instance_id: "i-0a1b2c3d4e5f6g7h8",
    s3_bucket: "kishore-tf-bucket-3108",
    region: "us-east-1"
  }

  return (
    <div style={{fontFamily: 'Arial', background:'#0f172a', color:'white', minHeight:'100vh', padding:'20px'}}>
      <Head>
        <title>AWS Terraform Dashboard | Kishore</title>
      </Head>

      {/* WARNING BANNER */}
      <div style={{background:'#dc2626', color:'white', padding:'12px', textAlign:'center', borderRadius:'8px', marginBottom:'20px', fontWeight:'bold'}}>
        ⚠️ WARNING: This AWS infrastructure costs money. Run `terraform destroy` after demo to avoid charges
      </div>

      <h1 style={{textAlign:'center', fontSize:'32px', marginBottom:'10px'}}>
        🚀 AWS Infrastructure Dashboard
      </h1>
      <p style={{textAlign:'center', color:'#94a3b8', marginBottom:'30px'}}>
        Built with Terraform + Next.js + Vercel
      </p>

      {/* CARDS GRID */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'20px', maxWidth:'1000px', margin:'0 auto'}}>
        
        <div style={{background:'#1e293b', padding:'20px', borderRadius:'12px', border:'1px solid #334155'}}>
          <h3>🖥️ EC2 Instance</h3>
          <p><b>Instance ID:</b> {data.instance_id}</p>
          <p><b>Public IP:</b> <a href={`http://${data.public_ip}`} target="_blank" style={{color:'#38bdf8'}}>{data.public_ip}</a></p>
          <p><b>Region:</b> {data.region}</p>
          <p><b>Status:</b> <span style={{color:'#4ade80'}}>Running ✅</span></p>
        </div>

        <div style={{background:'#1e293b', padding:'20px', borderRadius:'12px', border:'1px solid #334155'}}>
          <h3>🪣 S3 Bucket</h3>
          <p><b>Bucket Name:</b> {data.s3_bucket}</p>
          <p><b>Region:</b> {data.region}</p>
          <p><b>Status:</b> <span style={{color:'#4ade80'}}>Active ✅</span></p>
        </div>

        <div style={{background:'#1e293b', padding:'20px', borderRadius:'12px', border:'1px solid #334155'}}>
          <h3>🏗️ Terraform Info</h3>
          <p><b>Provider:</b> AWS</p>
          <p><b>State:</b> Local</p>
          <p><b>Deployed:</b> 2026-04-04</p>
        </div>

      </div>

      {/* COMMANDS SECTION - DIAGRAM BADULU IDHI PETTAM */}
      <div style={{maxWidth:'1000px', margin:'40px auto', background:'#1e293b', padding:'20px', borderRadius:'12px', border:'1px solid #334155'}}>
        <h2>🛠️ Terraform Commands</h2>
        <div style={{background:'#0f172a', padding:'15px', borderRadius:'8px', fontFamily:'monospace'}}>
          <p># Initialize</p>
          <p>terraform init</p>
          <br/>
          <p># Create Infrastructure</p>
          <p>terraform apply</p>
          <br/>
          <p># Destroy to save money</p>
          <p style={{color:'#dc2626'}}>terraform destroy</p>
        </div>
      </div>

      <footer style={{textAlign:'center', marginTop:'50px', color:'#64748b'}}>
        Made by Kishore | GitHub: kishore-3108
      </footer>
    </div>
  )
}