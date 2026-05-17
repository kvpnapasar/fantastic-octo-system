'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');

  const products = [
    // MEDICAL DEVICES (8)
    { id: 1, name: 'Patient Monitor', category: 'Medical Devices', image: '/images/monitor.webp', details: 'Multi-para monitor for vital signs.', features: ['NIBP, SpO2, ECG', 'Alarm System'] },
    { id: 2, name: 'ECG Machine', category: 'Medical Devices', image: '/images/ecg.webp', details: 'Digital multi-channel ECG.', features: ['High-res printing', 'Digital display'] },
    { id: 3, name: 'Syringe Pump', category: 'Medical Devices', image: '/images/syringe.webp', details: 'Precision infusion pump.', features: ['Accurate delivery', 'Safety alarms'] },
    { id: 4, name: 'O2 Concentrator', category: 'Medical Devices', image: '/images/o2.webp', details: 'Medical grade oxygen supply.', features: ['5L/10L options', 'Steady flow'] },
    { id: 5, name: 'Bipap Machine', category: 'Medical Devices', image: '/images/bipap.webp', details: 'Respiratory support device.', features: ['Smart tracking', 'Silent mode'] },
    { id: 6, name: 'NST Machine', category: 'Medical Devices', image: '/images/monitor.webp', details: 'Non-stress test monitor.', features: ['Fetal monitoring', 'Reliable data'] },
    { id: 7, name: 'Pulse Oximeter', category: 'Medical Devices', image: '/images/glucometer.webp', details: 'Fingertip SpO2 monitor.', features: ['Fast reading', 'OLED display'] },
    { id: 8, name: 'Cautery Machine', category: 'Medical Devices', image: '/images/devices.webp', details: 'Electrosurgical unit.', features: ['Precision cutting', 'Safe operation'] },

    // CONSUMABLES (32)
    { id: 9, name: 'ECG Roll', category: 'Consumables', image: '/images/ecg_roll.webp', details: 'Thermal paper for ECG.', features: ['Sensitive print', 'Long lasting'] },
    { id: 10, name: 'ECG Gel', category: 'Consumables', image: '/images/ecg_roll.webp', details: 'Conductive ultrasound gel.', features: ['Non-greasy', 'High conductivity'] },
    { id: 11, name: 'ECG Clamp', category: 'Consumables', image: '/images/ecg_roll.webp', details: 'Reusable limb clamps.', features: ['Secure fit', 'Standard size'] },
    { id: 12, name: 'Chest Lead', category: 'Consumables', image: '/images/ecg_roll.webp', details: 'ECG suction electrodes.', features: ['Strong suction', 'Reliable signal'] },
    { id: 13, name: 'SpO2 Probe', category: 'Consumables', image: '/images/monitor.webp', details: 'Reusable pulse ox probe.', features: ['Accurate SpO2', 'Soft silicone'] },
    { id: 14, name: 'ECG Cable', category: 'Consumables', image: '/images/ecg.webp', details: '10-lead ECG patient cable.', features: ['Shielded wire', 'Universal connector'] },
    { id: 15, name: 'Temp Probe', category: 'Consumables', image: '/images/monitor.webp', details: 'Body temperature sensor.', features: ['Fast response', 'Medical grade'] },
    { id: 16, name: 'NIBP Cuff', category: 'Consumables', image: '/images/monitor.webp', details: 'Blood pressure cuff.', features: ['All sizes', 'Durable Velcro'] },
    { id: 17, name: 'Foot Switch', category: 'Consumables', image: '/images/devices.webp', details: 'Heavy duty foot pedal.', features: ['Nonslip base', 'Long cable'] },
    { id: 18, name: 'Cautery Pencil', category: 'Consumables', image: '/images/devices.webp', details: 'Disposable ESU pencil.', features: ['Hand control', 'Sharp tip'] },
    { id: 19, name: 'Bipolar Cable', category: 'Consumables', image: '/images/devices.webp', details: 'Universal bipolar cord.', features: ['High insulation', 'Standard plug'] },
    { id: 20, name: 'Monopolar Cable', category: 'Consumables', image: '/images/devices.webp', details: 'ESU monopolar cable.', features: ['Flexible cord', 'Durable'] },
    { id: 21, name: 'Oxygen Sensor', category: 'Consumables', image: '/images/gases.webp', details: 'Respiratory O2 cell.', features: ['Fast response', 'Long life'] },
    { id: 22, name: 'Flow Sensor Drager', category: 'Consumables', image: '/images/gases.webp', details: 'Ventilator flow sensor.', features: ['Precision sensing', 'OEM compatible'] },
    { id: 23, name: 'Bain Circuit', category: 'Consumables', image: '/images/gases.webp', details: 'Anesthesia breathing circuit.', features: ['Low resistance', 'Transparent'] },
    { id: 24, name: 'Ambu Bag', category: 'Consumables', image: '/images/gases.webp', details: 'Resuscitation bag.', features: ['Silicone/PVC', 'Autoclavable'] },
    { id: 25, name: 'Ventilator Circuit', category: 'Consumables', image: '/images/gases.webp', details: 'Adult/Pediatric circuit.', features: ['Dual limb', 'Heated wire option'] },
    { id: 26, name: 'Nasal Canula', category: 'Consumables', image: '/images/gases.webp', details: 'Soft oxygen nasal tips.', features: ['Kink resistant', 'Comfortable'] },
    { id: 27, name: 'Bipap Mask', category: 'Consumables', image: '/images/bipap.webp', details: 'Full face/Nasal CPAP mask.', features: ['Leak proof', 'Soft cushion'] },
    { id: 28, name: 'Nebulizer Mask', category: 'Consumables', image: '/images/o2.webp', details: 'Medical aerosol mask.', features: ['Adjustable strap', 'Effective delivery'] },
    { id: 29, name: 'Battery CP 612', category: 'Consumables', image: '/images/battery.webp', details: 'Lead-acid medical battery.', features: ['6V 12Ah', 'Reliable power'] },
    { id: 30, name: 'Battery C2023', category: 'Consumables', image: '/images/battery.webp', details: 'Specialized medical battery.', features: ['High capacity', 'Long shelf life'] },
    { id: 31, name: 'Standard Battery', category: 'Consumables', image: '/images/battery.webp', details: 'Replacement device battery.', features: ['Safe charging', 'OEM quality'] },
    { id: 32, name: 'Battery Philips', category: 'Consumables', image: '/images/battery.webp', details: 'Philips monitor compatible.', features: ['Li-ion tech', 'Long runtime'] },
    { id: 33, name: 'Laryngoscope', category: 'Consumables', image: '/images/stethoscope.webp', details: 'Intubation tool set.', features: ['LED light', 'Stainless steel'] },
    { id: 34, name: 'Stethoscope', category: 'Consumables', image: '/images/stethoscope.webp', details: 'Acoustic diagnostic tool.', features: ['Clear sound', 'Dual head'] },
    { id: 35, name: 'Doppler Probe', category: 'Consumables', image: '/images/monitor.webp', details: 'Ultrasound fetal probe.', features: ['Waterproof', 'High sensitivity'] },
    { id: 36, name: 'Glucometer', category: 'Consumables', image: '/images/glucometer.webp', details: 'Blood sugar monitor.', features: ['Fast results', 'Digital'] },
    { id: 37, name: 'Thermometer', category: 'Consumables', image: '/images/glucometer.webp', details: 'Digital clinical thermometer.', features: ['Fast reading', 'Memory function'] },
    { id: 38, name: 'Hygrometer', category: 'Consumables', image: '/images/glucometer.webp', details: 'Digital humidity monitor.', features: ['Accurate sensing', 'Dual display'] },
    { id: 39, name: 'Vein Tracker', category: 'Consumables', image: '/images/devices.webp', details: 'Infrared vein finder.', features: ['Easy visualization', 'Portable'] },
    { id: 40, name: 'Pulse Oximeter Pro', category: 'Consumables', image: '/images/glucometer.webp', details: 'Advanced SpO2 sensor.', features: ['Graph display', 'USB sync'] },

    // MEDICAL FURNITURE (18)
    { id: 41, name: 'Electrical Bed', category: 'Medical Furniture', image: '/images/bed.webp', details: 'Fully motorized patient bed.', features: ['Remote controlled', 'Multi-position'] },
    { id: 42, name: 'Fowler Bed', category: 'Medical Furniture', image: '/images/bed.webp', details: 'Manually adjustable bed.', features: ['Ergonomic', 'Robust build'] },
    { id: 43, name: 'Stretcher Trolley', category: 'Medical Furniture', image: '/images/stretcher.webp', details: 'Emergency transport trolley.', features: ['Smooth wheels', 'Hydraulic'] },
    { id: 44, name: 'Bed Side Locker', category: 'Medical Furniture', image: '/images/trolley.webp', details: 'Patient bedside storage.', features: ['Stainless steel', 'Lockable'] },
    { id: 45, name: 'Cardiac Table', category: 'Medical Furniture', image: '/images/furniture.webp', details: 'Over-bed adjustable table.', features: ['Height adjust', 'Wooden top'] },
    { id: 46, name: 'Crash Cart', category: 'Medical Furniture', image: '/images/trolley.webp', details: 'Code blue emergency cart.', features: ['Central lock', 'Drawer dividers'] },
    { id: 47, name: 'Dressing Trolley', category: 'Medical Furniture', image: '/images/trolley.webp', details: 'Surgical dressing cart.', features: ['Washable', 'Shelf guards'] },
    { id: 48, name: 'ECG Trolley', category: 'Medical Furniture', image: '/images/trolley.webp', details: 'Mobile ECG machine stand.', features: ['Caster wheels', 'Compact'] },
    { id: 49, name: 'Cylinder Trolley', category: 'Medical Furniture', image: '/images/trolley.webp', details: 'Gas cylinder transporter.', features: ['Heavy duty', 'Safety chain'] },
    { id: 50, name: 'Bed Screen', category: 'Medical Furniture', image: '/images/furniture.webp', details: 'Privacy hospital screen.', features: ['Foldable', 'Blue fabric'] },
    { id: 51, name: 'Foot Step', category: 'Medical Furniture', image: '/images/furniture.webp', details: 'Patient step stool.', features: ['Nonslip mat', 'Single/Double'] },
    { id: 52, name: 'OT Stool', category: 'Medical Furniture', image: '/images/furniture.webp', details: 'Operating theater stool.', features: ['Height adjust', 'Revolving'] },
    { id: 53, name: 'Instrument Trolley', category: 'Medical Furniture', image: '/images/trolley.webp', details: 'Multi-shelf instrument cart.', features: ['Mirror finish', 'Side rails'] },
    { id: 54, name: 'Gynac Table', category: 'Medical Furniture', image: '/images/bed.webp', details: 'Examination table set.', features: ['Leg holders', 'Adjustable'] },
    { id: 55, name: 'Procedure Lamp', category: 'Medical Furniture', image: '/images/furniture.webp', details: 'Mobile examination light.', features: ['Bright LED', 'Flexible arm'] },
    { id: 56, name: 'OT Dome Light', category: 'Medical Furniture', image: '/images/furniture.webp', details: 'Surgical ceiling light.', features: ['Shadowless', 'Focus adjust'] },
    { id: 57, name: 'PhotoTherapy', category: 'Medical Furniture', image: '/images/furniture.webp', details: 'Jaundice treatment lamp.', features: ['Blue LED', 'Stand mount'] },
    { id: 58, name: 'Monitor Stand', category: 'Medical Furniture', image: '/images/furniture.webp', details: 'Wall/Desk monitor mount.', features: ['Tilt & Swivel', 'Solid steel'] },

    // MEDICAL GASES (12)
    { id: 59, name: 'Oxygen Flowmeter', category: 'Medical Gases', image: '/images/regulator.webp', details: 'Regulated O2 delivery.', features: ['Precise control', 'Back-pressure safe'] },
    { id: 60, name: 'F.A. Valve', category: 'Medical Gases', image: '/images/regulator.webp', details: 'Fine adjustment gas valve.', features: ['Durable brass', 'Easy turn'] },
    { id: 61, name: 'Mox Regulator', category: 'Medical Gases', image: '/images/regulator.webp', details: 'Single gauge gas regulator.', features: ['High pressure', 'Safety valve'] },
    { id: 62, name: 'Double Flowmeter', category: 'Medical Gases', image: '/images/regulator.webp', details: 'Dual outlet oxygen meter.', features: ['Independant control', 'Compact'] },
    { id: 63, name: 'Suction Apparatus', category: 'Medical Gases', image: '/images/regulator.webp', details: 'Wall suction unit.', features: ['Vac regulator', 'Safety jar'] },
    { id: 64, name: 'Hose Pipes', category: 'Medical Gases', image: '/images/gases.webp', details: 'Medical grade gas tubing.', features: ['Color coded', 'High pressure'] },
    { id: 65, name: 'Probe', category: 'Medical Gases', image: '/images/gases.webp', details: 'Gas outlet connector.', features: ['Self-sealing', 'Standard size'] },
    { id: 66, name: 'Outlets', category: 'Medical Gases', image: '/images/gases.webp', details: 'Wall gas terminal points.', features: ['Quick connect', 'Leak proof'] },
    { id: 67, name: 'A-Type Regulator', category: 'Medical Gases', image: '/images/regulator.webp', details: 'Standard gas regulator.', features: ['Single stage', 'Reliable'] },
    { id: 68, name: 'Suction Trolley', category: 'Medical Gases', image: '/images/trolley.webp', details: 'Mobile suction unit cart.', features: ['Double jars', 'Foot switch'] },
    { id: 69, name: 'HFNC Unit', category: 'Medical Gases', image: '/images/gases.webp', details: 'High flow nasal cannula.', features: ['Heated oxygen', 'Adjustable'] },
    { id: 70, name: 'Suction Machine', category: 'Medical Gases', image: '/images/regulator.webp', details: 'Portable suction pump.', features: ['Lightweight', 'Powerful vac'] }
  ];

  const categories = ['All', 'Medical Devices', 'Medical Furniture', 'Consumables', 'Medical Gases'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleInquiry = (productName) => {
    const message = encodeURIComponent(`Hello Sahyadri Healthcare, I want to inquire about: ${productName}. Please share details.`);
    window.open(`https://wa.me/919867708193?text=${message}`, '_blank');
  };

  return (
    <main>
      {/* Premium Light Hero */}
      <section id="home" className="hero-v3 fade-in">
        <div className="container hero-layout">
          <div className="hero-text">
            <span className="hero-tag">Official Supplier & Service Partner</span>
            <h1>Your Trusted Source for <span>Premium Medical</span> Equipment</h1>
            <p>Sahyadri Healthcare provides end-to-end solutions for medical devices, furniture, and gases. From Sales to Rental and Expert Service, we empower healthcare providers with quality tools.</p>
            <div className="hero-btns">
              <button onClick={() => document.getElementById('products').scrollIntoView({behavior: 'smooth'})} className="btn btn-primary btn-xl">View All 70 Products</button>
              <button onClick={() => handleInquiry('Full Catalog')} className="btn btn-outline btn-xl">Request Price List</button>
            </div>
          </div>
          <div className="hero-viz">
            <img src="/images/hero.webp" alt="Clinical Excellence" decoding="async" fetchPriority="high" width="600" height="400" />
            <div className="stat-floating">
               <div className="stat-val">70+</div>
               <div className="stat-lbl">Premium Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="products" className="catalog-section">
        <div className="container">
          <div className="catalog-header">
            <h2>Our Full Product Catalog</h2>
            <p>Browse our complete list of 70 medical products from the official Sahyadri Healthcare catalog.</p>
            
            <div className="filter-bar">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="catalog-grid">
            {filteredProducts.map((p) => (
              <div key={p.id} className="catalog-card fade-in">
                <div className="card-img">
                  <img src={p.image} alt={p.name} loading="lazy" decoding="async" width="300" height="200" style={{ objectFit: 'cover' }} />
                  <span className="card-tag">{p.category}</span>
                </div>
                <div className="card-body">
                  <h3>{p.name}</h3>
                  <p>{p.details}</p>
                  <ul className="card-features">
                    {p.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                  <button onClick={() => handleInquiry(p.name)} className="btn btn-primary btn-full">
                    Inquire on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section id="contact" className="quick-contact">
         <div className="container contact-grid">
            <div className="contact-card">
               <h2>Get Direct Support</h2>
               <p>Have questions about specific equipment? Our team is available 24/7 for support and inquiries.</p>
               <div className="contact-links">
                  <div className="link-item"><strong>WhatsApp:</strong> +91 9867708193</div>
                  <div className="link-item"><strong>Email:</strong> info@sahyadrihealthcare.com</div>
                  <div className="link-item"><strong>Location:</strong> Nerul, Navi Mumbai</div>
               </div>
               <button onClick={() => handleInquiry('General Support')} className="btn btn-primary btn-xl" style={{marginTop: '30px'}}>Start Conversation</button>
            </div>
            <div className="contact-visual">
               <img src="/images/devices.webp" alt="Contact Us" loading="lazy" decoding="async" width="500" height="350" />
            </div>
         </div>
      </section>

      <style jsx>{`
        .hero-v3 {
          padding: 120px 0 100px;
          background: #fff;
        }
        .hero-layout {
          display: flex;
          align-items: center;
          gap: 60px;
        }
        .hero-text { flex: 1; }
        .hero-viz { flex: 0.8; position: relative; }
        .hero-viz img { width: 100%; border-radius: 40px; box-shadow: var(--shadow-lg); }
        
        .hero-tag {
          color: var(--primary-color);
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 0.85rem;
          margin-bottom: 20px;
          display: block;
        }
        .hero-text h1 { font-size: 4rem; line-height: 1.1; margin-bottom: 30px; }
        .hero-text h1 span { color: var(--primary-color); }
        .hero-text p { font-size: 1.3rem; color: var(--light-text); margin-bottom: 40px; line-height: 1.6; }
        .hero-btns { display: flex; gap: 20px; }
        .btn-xl { padding: 20px 45px; font-size: 1.1rem; font-weight: 700; border-radius: 50px; }
        
        .stat-floating {
          position: absolute;
          bottom: -30px;
          right: -30px;
          background: var(--white);
          padding: 30px;
          border-radius: 30px;
          box-shadow: var(--shadow-lg);
          text-align: center;
          animation: float 5s infinite ease-in-out;
        }
        .stat-val { font-size: 3rem; font-weight: 900; color: var(--primary-color); }
        .stat-lbl { font-weight: 700; color: var(--secondary-color); }

        .catalog-section { padding: 100px 0; background: var(--accent-color); }
        .catalog-header { text-align: center; margin-bottom: 60px; }
        .catalog-header h2 { font-size: 3.5rem; margin-bottom: 20px; }
        .filter-bar { display: flex; justify-content: center; gap: 15px; margin-top: 40px; flex-wrap: wrap; }
        .filter-tab { padding: 12px 30px; border-radius: 50px; border: 2px solid #ddd; background: #fff; font-weight: 700; cursor: pointer; transition: var(--transition); }
        .filter-tab.active { background: var(--primary-color); color: #fff; border-color: var(--primary-color); }

        .catalog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 30px; }
        .catalog-card { background: #fff; border-radius: 25px; overflow: hidden; box-shadow: var(--shadow-sm); transition: var(--transition); display: flex; flex-direction: column; }
        .catalog-card:hover { transform: translateY(-10px); box-shadow: var(--shadow-md); }
        .card-img { height: 200px; position: relative; }
        .card-img img { width: 100%; height: 100%; object-fit: cover; }
        .card-tag { position: absolute; bottom: 15px; left: 15px; background: rgba(0,0,0,0.7); color: #fff; padding: 5px 15px; border-radius: 20px; font-size: 0.7rem; font-weight: 800; }
        .card-body { padding: 25px; flex: 1; display: flex; flex-direction: column; }
        .card-body h3 { font-size: 1.4rem; margin-bottom: 15px; }
        .card-body p { color: var(--light-text); font-size: 0.9rem; margin-bottom: 20px; line-height: 1.5; }
        .card-features { margin-bottom: 25px; flex: 1; }
        .card-features li { font-size: 0.85rem; margin-bottom: 8px; color: var(--text-color); padding-left: 20px; position: relative; }
        .card-features li::before { content: '✓'; position: absolute; left: 0; color: var(--primary-color); font-weight: 900; }
        .btn-full { width: 100%; text-align: center; border: none; cursor: pointer; }

        .quick-contact { padding: 120px 0; background: #fff; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .contact-card h2 { font-size: 3.5rem; margin-bottom: 30px; }
        .contact-links { margin-top: 40px; display: flex; flex-direction: column; gap: 20px; font-size: 1.2rem; }
        .contact-visual img { width: 100%; border-radius: 30px; }

        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }

        @media (max-width: 1024px) {
          .hero-layout, .contact-grid { flex-direction: column; text-align: center; }
          .hero-btns { justify-content: center; }
          .hero-text h1 { font-size: 3rem; }
          .catalog-header h2 { font-size: 2.5rem; }
        }
      `}</style>
    </main>
  );
}
