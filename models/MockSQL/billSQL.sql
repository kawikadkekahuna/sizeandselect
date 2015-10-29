-- name
INSERT INTO pressure_units VALUES (DEFAULT, 'psig');
INSERT INTO pressure_units VALUES (DEFAULT, 'psia');
INSERT INTO pressure_units VALUES (DEFAULT, 'atm g');
INSERT INTO pressure_units VALUES (DEFAULT, 'in Hg g');
INSERT INTO pressure_units VALUES (DEFAULT, 'in wc g');
INSERT INTO pressure_units VALUES (DEFAULT, 'lb/ft^2 g');
INSERT INTO pressure_units VALUES (DEFAULT, 'oz/in^2 g');
INSERT INTO pressure_units VALUES (DEFAULT, 'Torr g');

-- name
INSERT INTO temperature_units VALUES (DEFAULT, 'F');
INSERT INTO temperature_units VALUES (DEFAULT, 'C');

-- name
INSERT INTO viscosity_units VALUES (DEFAULT, 'cP');
INSERT INTO viscosity_units VALUES (DEFAULT, 'ft^2/s');
INSERT INTO viscosity_units VALUES (DEFAULT, 'in^2/s');
INSERT INTO viscosity_units VALUES (DEFAULT, 'lb/ft-s');
INSERT INTO viscosity_units VALUES (DEFAULT, 'lbf-s/ft^2');
INSERT INTO viscosity_units VALUES (DEFAULT, 'SSU');


-- name, media type
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'lb/day', liquid);
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'lb/hr', liquid);
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'lb/min', liquid);
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'lb/s', liquid);
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'BBL/d', liquid);
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'BBL/h', liquid);
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'ft^3/day', liquid);
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'ft^3/hr', liquid);
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'ft^3/min', liquid);
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'GPD-Imp', liquid);
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'GPD-US', liquid);
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'GPH-Imp', liquid);
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'GPH-US', liquid);
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'GPM-Imp', liquid);
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'GPM-US', liquid);
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'GPS-Imp', liquid);
INSERT INTO flow_capacity_units VALUES (DEFAULT, 'GPS-US', liquid);

-- name
INSERT INTO devices VALUES (DEFAULT, 'Relief Valves');
INSERT INTO devices VALUES (DEFAULT, 'Tank Vents');
INSERT INTO devices VALUES (DEFAULT, 'Regulators');
INSERT INTO devices VALUES (DEFAULT, 'Flame Arrestors');
INSERT INTO devices VALUES (DEFAULT, 'Control Valves');
INSERT INTO devices VALUES (DEFAULT, 'Liquid Level');
INSERT INTO devices VALUES (DEFAULT, 'Pressure | Temperature Transmitters');
INSERT INTO devices VALUES (DEFAULT, 'Instrumentation Valves');

-- name, specific gravity, viscosity
INSERT INTO liquid_medias VALUES (DEFAULT, 'Acetaldehyde', '0.779', '0.23800');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Acetic Acid', '1.051', '1.22000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Acetone', '0.792', '0.3200');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Ammonia', '0.666', '0.2');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Aniline', '1.021', '3.7100');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Beer', '1.010', '1.818');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Benzene', '0.880', '0.60400');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Boiler Feed Water', '1.000', '1.0070');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Boron Trifluoride', '1.570', '1.800');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Butadiene', '0.622', '0.2500');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Butane-N', '0.579', '0.2580');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Butylene', '0.600', '2.4000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Carbon Dioxide', '1.030', '0.108');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Carbon Disulfide', '1.270', '0.419');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Carbon Tetrachloride', '1.600', '0.901');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Chlorine', '1.420', '0.3500');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Condensate', '0.718', '0.74500');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Crude Oil, Heavy', '0.862', '136.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Crude Oil, Light', '0.790', '8.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Cyclohexane', '0.780', '1.0200');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Cyclopropane', '0.621', '1.0200');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Decane-n', '0.731', '1.725');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Diesel', '0.885', '3.5400');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Diethyl Ether', '2.570', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Ethylene Glycol', '1.120', '21.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Dimethyl Ether', '0.663', '0.224');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Dimenthylamine', '0.656', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Ethane', '0.356', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Ethanol', '0.790', '1.0740');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Ethylene Glycol', '1.115', '21.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Fuel Oil', '0.885', '3.788');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Gasoline', '0.740', '0.65100');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Glycerin', '1.260', '816.00');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Heptane', '0.685', '0.3600');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Hexane', '0.660', '0.29400');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Hydrochloric Acid', '1.640', '1.900');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Hydrogen Sulfide', '0.780', '1.00');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Isobutane', '0.558', '0.27700');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Isoprene', '0.682', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Isopropanol', '0.786', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Jet Fuel', '0.820', '6.4780');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Kerosene', '0.820', '2.2220');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Methane', '0.300', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Methanol', '0.792', '0.54400');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Methyl Chloride', '0.921', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Methyl Mercaptan', '0.870', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Ethylene Glycol', '1.115', '21.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Monomethylamine', '0.663', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Motor Oil', '0.940', '8.700');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Naphtha', '0.665', '7.11900');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Nitric Acid', '1.500', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Nitrogen', '0.809', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Nitrous Oxide', '1.230', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Octane', '0.703', '0.8900');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Oxygen', '1.140', '0.196');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Pentane', '0.627', '0.3400');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Propadiene', '0.659', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Propane', '0.501', '0.18600');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Propylene', '0.514', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Propylene Oxide', '0.830', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Sea Water', '1.025', '1.179');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Styrene', '0.908', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Sulfur Dioxide', '1.430', '0.36800');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Sulfur Hexafluoride', '1.370', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Sulfuric Acid (20%)', '1.140', '1.200');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Sulfuric Acid (60%)', '1.500', '6.600');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Sulfuric Acid (95-100%)', '1.839', '26.800');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Toluene', '0.868', '0.5900');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Triethylamine', '0.728', '0.36300');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Triethylene Glycol', '1.126', '45.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Vinyl Chloride Monomer', '0.985', '1.000');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Water', '1.000', '1.00700');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Water Other', '1.000', '1.00700');
INSERT INTO liquid_medias VALUES (DEFAULT, 'Xylene', '0.862', '0.81200');

-- name, Molecular Weight, K (Cp/Cv), Compressibility
INSERT INTO vapor_medias VALUES (DEFAULT, 'Acetone', '58.080', '1.120', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Acetylene', '26.040', '1.260', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Air', '28.970', '1.400', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Ammonia', '17.030', '1.310', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Argon', '39.950', '1.670', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Benzene', '78.110', '1.120', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Boron Triflouride', '67.820', '1.200', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Butadiene', '54.090', '1.120', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Butane-N', '58.120', '1.090', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Butylene', '56.110', '1.110', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Carbon Dioxide', '44.010', '1.290', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Carbon Disulfide', '76.130', '1.210', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Carbon Monoxide', '28.010', '1.400', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Carbon Tetrachloride', '153.820', '1.110', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Chlorine', '70.910', '1.360', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Cyclohexane', '84.160', '1.090', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Cyclopropane', '42.080', '1.110', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Decane', '142.290', '1.040', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Diethyl Ether', '74.120', '1.080', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Diethylene Glycol', '106.170', '1.00', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Dimethyl Ether', '46.070', '1.110', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Dimethlamine', '45.080', '1.150', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Dowtherm A', '165.000', '1.050', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Dowtherm E', '147.000', '1.000', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Ethane', '30.070', '1.190', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Ethanol', '46.070', '1.130', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Ethylene', '28.050', '1.240', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Ethylene Glycol', '62.070', '1.090', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Ethlene Oxide', '44.050', '1.210', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Gasoline', '95.000', '1.001', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Glycerin', '92.100', '1.060', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Helium', '4.000', '1.670', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Heptane', '100.210', '1.050', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Hexane', '86.180', '1.060', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Hydrogen', '2.020', '1.410', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Hydrogen Chloride, Anhydrous', '36.460', '1.410', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Hydrogen Sulfide', '34.080', '1.320', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Isobutane', '58.120', '1.100', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Isoprene', '68.120', '1.090', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Ispropanol', '60.100', '1.090', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Krypton', '83.800', '1.710', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Methane', '16.040', '1.310', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Methanol', '32.040', '1.200', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Methyl Chloride', '50.490', '1.280', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Methyl Mercaptan', '48.110', '1.200', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Methylamine', '31.060', '1.020', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Monethylene Glycol', '62.070', '1.090', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Naphthalene', '128.170', '1.070', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Natural Gas', '17.400', '1.270', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Neon', '20.180', '1.640', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Nitrogen', '28.010', '1.400', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Nitrous Oxide', '44.010', '1.300', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Octane', '114.230', '1.050', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Oxygen', '32.000', '1.400', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Pentane', '72.150', '1.070', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Propandiene', '40.070', '1.690', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Propane', '44.100', '1.130', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Propylene', '42.080', '1.150', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Propylene Oxide', '58.080', '1.130', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'R115', '154.480', '1.080', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'R12', '120.930', '1.140', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'R13', '104.470', '1.170', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'R22', '86.480', '1.180', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Styrene', '104.150', '1.070', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Sulfur Dioxide', '64.060', '1.280', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Sulfur Hexaflouride', '146.050', '1.090', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Toluene', '92.140', '1.090', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Triethylene Glycol', '150.180', '1.040', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Trimethlamine', '59.110', '1.180', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Vinyl Chloride Monomer', '63.500', '1.190', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Xenon', '131.300', '1.650', '1.000');
INSERT INTO vapor_medias VALUES (DEFAULT, 'Xylene', '106.170', '1.070', '1.000');

-- name,% overpressure
INSERT INTO select_sizing_basis VALUES (DEFAULT, 'Blocked Discharge', 10%);
INSERT INTO select_sizing_basis VALUES (DEFAULT, 'Control Valve Failure', 10%);
INSERT INTO select_sizing_basis VALUES (DEFAULT, 'Fire Case', 21%);
INSERT INTO select_sizing_basis VALUES (DEFAULT, 'Runaway Reaction', 10%);
INSERT INTO select_sizing_basis VALUES (DEFAULT, 'Thermal Relief', 10%);
INSERT INTO select_sizing_basis VALUES (DEFAULT, 'Tube Rupture', 10%);
INSERT INTO select_sizing_basis VALUES (DEFAULT, 'Valve Capacity', 10%);

-- name
INSERT INTO toggle_api_asme_sizing VALUES (DEFAULT, 'API');
INSERT INTO toggle_api_asme_sizing VALUES (DEFAULT, 'ASME');

-- name
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Media Type', 'K Factor', 'Orifice', 'Area');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Gas', '0.975', 'D', '0.110');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Gas', '0.975', 'E', '0.196');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Gas', '0.975', 'F', '0.307');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Gas', '0.975', 'G', '0.503');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Gas', '0.975', 'H', '0.785');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Gas', '0.975', 'J', '1.287');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Gas', '0.975', 'K', '1.838');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Gas', '0.975', 'L', '2.853');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Gas', '0.975', 'M', '3.600');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Gas', '0.975', 'N', '4.340');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Gas', '0.975', 'P', '6.380');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Gas', '0.975', 'Q', '11.05');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Gas', '0.975', 'R', '16.00');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Liquid', '0.650', 'D', '0.110');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Liquid', '0.650', 'E', '0.196');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Liquid', '0.650', 'F', '0.307');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Liquid', '0.650', 'G', '0.503');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Liquid', '0.650', 'H', '0.785');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Liquid', '0.650', 'J', '1.287');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Liquid', '0.650', 'K', '1.838');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Liquid', '0.650', 'L', '2.853');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Liquid', '0.650', 'M', '3.600');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Liquid', '0.650', 'N', '4.340');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Liquid', '0.650', 'P', '6.380');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Liquid', '0.650', 'Q', '11.05');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Liquid', '0.650', 'R', '16.00');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Steam', '0.975', 'D', '0.110');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Steam', '0.975', 'E', '0.196');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Steam', '0.975', 'F', '0.307');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Steam', '0.975', 'G', '0.503');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Steam', '0.975', 'H', '0.785');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Steam', '0.975', 'J', '1.287');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Steam', '0.975', 'K', '1.838');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Steam', '0.975', 'L', '2.853');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Steam', '0.975', 'M', '3.600');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Steam', '0.975', 'N', '4.340');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Steam', '0.975', 'P', '6.380');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Steam', '0.975', 'Q', '11.05');
INSERT INTO orifice_sizes VALUES (DEFAULT, 'Steam', '0.975', 'R', '16.00');



-- name
INSERT INTO connection_sizes VALUES (DEFAULT, '1/2x3/4');
INSERT INTO connection_sizes VALUES (DEFAULT, '1/2x1');
INSERT INTO connection_sizes VALUES (DEFAULT, '3/4x3/4');
INSERT INTO connection_sizes VALUES (DEFAULT, '1x1');
INSERT INTO connection_sizes VALUES (DEFAULT, '1-1/2x1-1/2');
INSERT INTO connection_sizes VALUES (DEFAULT, '1-1/2x2');
INSERT INTO connection_sizes VALUES (DEFAULT, '1-1/2x3');
INSERT INTO connection_sizes VALUES (DEFAULT, '2x2');
INSERT INTO connection_sizes VALUES (DEFAULT, '2x3');
INSERT INTO connection_sizes VALUES (DEFAULT, '3x4');
INSERT INTO connection_sizes VALUES (DEFAULT, '4x6');
INSERT INTO connection_sizes VALUES (DEFAULT, '6x8');
INSERT INTO connection_sizes VALUES (DEFAULT, '8x10');


-- name
INSERT INTO inlet_flanges VALUES (DEFAULT, 'MNPT');
INSERT INTO inlet_flanges VALUES (DEFAULT, 'FNPT');
INSERT INTO inlet_flanges VALUES (DEFAULT, '150#');
INSERT INTO inlet_flanges VALUES (DEFAULT, '300#');
INSERT INTO inlet_flanges VALUES (DEFAULT, '600#');
INSERT INTO inlet_flanges VALUES (DEFAULT, '1500#');
INSERT INTO inlet_flanges VALUES (DEFAULT, '2500#');


-- name
INSERT INTO flange_facings VALUES (DEFAULT, 'RF');
INSERT INTO flange_facings VALUES (DEFAULT, 'RTJ');

-- name
INSERT INTO trim_types VALUES (DEFAULT, '316SS');
INSERT INTO trim_types VALUES (DEFAULT, 'Monel');
INSERT INTO trim_types VALUES (DEFAULT, 'Hastelloy C');

-- name
INSERT INTO seat_types VALUES (DEFAULT, 'Metal');
INSERT INTO seat_types VALUES (DEFAULT, 'Buna-N');
INSERT INTO seat_types VALUES (DEFAULT, 'Viton');
INSERT INTO seat_types VALUES (DEFAULT, 'EPR');
INSERT INTO seat_types VALUES (DEFAULT, 'Kalrez');
INSERT INTO seat_types VALUES (DEFAULT, 'Silicone');
INSERT INTO seat_types VALUES (DEFAULT, 'Teflon');


-- name
INSERT INTO material_variables VALUES (DEFAULT, 'Carbon Steel');
INSERT INTO material_variables VALUES (DEFAULT, '316 SS');
INSERT INTO material_variables VALUES (DEFAULT, 'Monel');
INSERT INTO material_variables VALUES (DEFAULT, 'Hastelloy C');

-- name
INSERT INTO cap_types VALUES (DEFAULT, 'screwed cap');
INSERT INTO cap_types VALUES (DEFAULT, 'standard lift lever');
INSERT INTO cap_types VALUES (DEFAULT, 'packed lift lever');
INSERT INTO cap_types VALUES (DEFAULT, 'bolted cap');


-- name
INSERT INTO project_statuses VALUES (DEFAULT, 'Open');
INSERT INTO project_statuses VALUES (DEFAULT, 'Closed');
INSERT INTO project_statuses VALUES (DEFAULT, 'Quote Needed');
INSERT INTO project_statuses VALUES (DEFAULT, 'Order');
INSERT INTO project_statuses VALUES (DEFAULT, 'Need Tracking Number');
INSERT INTO project_statuses VALUES (DEFAULT, 'Completed');

-- name
INSERT INTO user_type VALUES (DEFAULT, 'Engineer');
INSERT INTO user_type VALUES (DEFAULT, 'Engineering Manager');
INSERT INTO user_type VALUES (DEFAULT, 'Engineering Firm');
INSERT INTO user_type VALUES (DEFAULT, 'Factory Engineer');
INSERT INTO user_type VALUES (DEFAULT, 'Local Representative');

—- name
INSERT INTO Action VALUES (DEFAULT, 'Technical Support');
INSERT INTO Action VALUES (DEFAULT, 'Quote');
INSERT INTO Action VALUES (DEFAULT, 'Status Update Needed');
INSERT INTO Action VALUES (DEFAULT, 'Tracking Information');
INSERT INTO Action VALUES (DEFAULT, 'Test and Repair');
INSERT INTO Action VALUES (DEFAULT, 'Message');
