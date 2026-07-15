export default function Dashboard() {
  const data = {
    vpc_id: "vpc-014d6c37ce237a2fe",
    ec2_public_ip: "13.235.133.195",
    ec2_instance_id: "i-02d23b59e706f4ea6",
    public_subnets: ["subnet-04a746b6c", "subnet-01c66f4a"],
    private_subnets: ["subnet-0778622ce", "subnet-0e56fdc4e"],
    region: "ap-south-1",
    status: "Active"
  }

  return (
    <div style={{minHeight: '100vh', background: '#111827', color: 'white', padding: '32px', fontFamily: 'Arial'}}>
      <h1 style={{fontSize: '36px', fontWeight: 'bold', marginBottom: '8px'}}>AWS Terraform Infrastructure</h1>
      <p style={{color: '#9CA3AF', marginBottom: '32px'}}>Provisioned with 100% IaC - No Console Clicks</p>
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'}}>
        
        <div style={{background: '#1F2937', padding: '24px', borderRadius: '12px'}}>
          <p style={{color: '#9CA3AF'}}>Status</p>
          <p style={{fontSize: '24px', fontWeight: 'bold', color: '#4ADE80'}}>{data.status}</p>
        </div>

        <div style={{background: '#1F2937', padding: '24px', borderRadius: '12px'}}>
          <p style={{color: '#9CA3AF'}}>EC2 Public IP</p>
          <p style={{fontSize: '20px', fontFamily: 'monospace'}}>{data.ec2_public_ip}</p>
          <a href={`http://${data.ec2_public_ip}`} target="_blank" style={{color: '#60A5FA', fontSize: '14px'}}>Open in Browser →</a>
        </div>

        <div style={{background: '#1F2937', padding: '24px', borderRadius: '12px'}}>
          <p style={{color: '#9CA3AF'}}>Region</p>
          <p style={{fontSize: '20px'}}>{data.region}</p>
        </div>
      </div>

      <div style={{background: '#1F2937', padding: '24px', borderRadius: '12px', marginTop: '24px'}}>
        <h2 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '16px'}}>Resource Details</h2>
        <p><b>VPC ID:</b> {data.vpc_id}</p>
        <p><b>Instance ID:</b> {data.ec2_instance_id}</p>
        <p><b>Public Subnets:</b> {data.public_subnets.length}</p>
        <p><b>Private Subnets:</b> {data.private_subnets.length}</p>
      </div>
    </div>
  )
}