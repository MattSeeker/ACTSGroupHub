export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  const { email, password } = req.body;
  
  // ACTS Group member credentials
  const memberCredentials = [
    { email: "mattjmay.fl@gmail.com", password: "Mx7kR9Pq", name: "Matt May", role: "lead_admin" },
    { email: "TCBMaster@aol.com", password: "Vn3wF8Lm", name: "David Paul", role: "member" },
    { email: "ashley.noriega@edgehomefinance.com", password: "Hq5tY2Zx", name: "Ashley Noriega", role: "member" },
    { email: "quezadato@yahoo.com", password: "Bp8nK4Rv", name: "Toni Sanchez", role: "newsletter_editor" },
    { email: "Ceobrien618@gmail.com", password: "Jd6mW1Ct", name: "Colleen O'Brien", role: "member" },
    { email: "77kt007@gmail.com", password: "Fs9qE7Xh", name: "KT Nicotra", role: "member" },
    { email: "ethanpineiro@live.com", password: "Gn2vB5Yk", name: "Ethan Pineiro", role: "member" },
    { email: "hsc.sdiaz@gmail.com", password: "Pt4jS8Wl", name: "Sara Diaz", role: "member" },
    { email: "brittanypward@gmail.com", password: "Qr7uA3Zm", name: "Brittany Ward", role: "member" },
    { email: "casucje1@gmail.com", password: "Lx1kN6Dg", name: "Jessica Casucci", role: "member" },
    { email: "windycityvanessa@gmail.com", password: "Nz5hM9Pb", name: "Vanessa Castillo", role: "member" },
    { email: "tony@gulfcoasttree.buz", password: "Tw8fQ4Vc", name: "Tony Ski", role: "member" },
    { email: "Dabears2604@gmail.com", password: "Yr3xJ7Ks", name: "Dean Smith", role: "member" },
    { email: "chris@stfchurch.com", password: "Cv6pL2Hf", name: "Pastor Chris Sullivan", role: "pastor_contact" }
  ];
  
  // Find member by email (case-insensitive)
  const member = memberCredentials.find(m => 
    m.email.toLowerCase() === email.toLowerCase()
  );
  
  if (member && member.password === password) {
    // Create session data
    const sessionData = {
      name: member.name,
      email: member.email,
      role: member.role,
      loginTime: Date.now()
    };
    
    // Set secure cookie with user session data
    res.setHeader('Set-Cookie', [
      `acts-auth=${Buffer.from(JSON.stringify(sessionData)).toString('base64')}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict`
    ]);
    
    return res.status(200).json({ success: true, user: sessionData });
  }
  
  return res.status(401).json({ message: 'Invalid email or password' });
}