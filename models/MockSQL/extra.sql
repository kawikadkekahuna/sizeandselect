-- name,% overpressure -- bill added overpressure
INSERT INTO select_sizing_basis VALUES (DEFAULT, 'Blocked Discharge', '10%');
INSERT INTO select_sizing_basis VALUES (DEFAULT, 'Control Valve Failure', '10%');
INSERT INTO select_sizing_basis VALUES (DEFAULT, 'Fire Case', '21%');
INSERT INTO select_sizing_basis VALUES (DEFAULT, 'Runaway Reaction', '10%');
INSERT INTO select_sizing_basis VALUES (DEFAULT, 'Thermal Relief', '10%');
INSERT INTO select_sizing_basis VALUES (DEFAULT, 'Tube Rupture', '10%');
INSERT INTO select_sizing_basis VALUES (DEFAULT, 'Valve Capacity', '10%');

-- INSERT INTO orifice_sizes VALUES (DEFAULT, 'Media Type', 'K Factor', 'Orifice', 'Area');
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

-- name UNSURE
INSERT INTO Action VALUES (DEFAULT, 'Technical Support');
INSERT INTO Action VALUES (DEFAULT, 'Quote');
INSERT INTO Action VALUES (DEFAULT, 'Status Update Needed');
INSERT INTO Action VALUES (DEFAULT, 'Tracking Information');
INSERT INTO Action VALUES (DEFAULT, 'Test and Repair');
INSERT INTO Action VALUES (DEFAULT, 'Message');

-- additional media types  - consider creating a new table for medai type categories (liquid, vapor)
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