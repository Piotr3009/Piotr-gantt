// Project configuration
        let projectTitle = '3-7 Herbal - all 3 floors';
        let projectPassword = null;
        let projectBaseline = null;
        
        // Sort mode
        let sortMode = 'added'; // 'added' or 'date'
        let showDependencies = false;
        
        // Dynamic month range
        let monthsToShow = 12;
        let startMonthOffset = 0;
        
        // Template groups with predefined tasks and dependencies
        const groupTemplates = {
            'pre-construction': {
                name: 'Pre-Construction',
                color: '#D97A34',
                tasks: [
                    { name: 'Order and send PO – structural steel', duration: 3 },
                    { name: 'Order and send PO – sanitaryware', duration: 3 },
                    { name: 'Order and send PO – lighting', duration: 3 },
                    { name: 'Order and send PO – kitchen', duration: 3, triggers: { task: 'Installation of kitchen units', waitDays: 36 } },
                    { name: 'Order and send PO – internal doors and ironmongery', duration: 3 },
                    { name: 'Order and send PO – flooring', duration: 3 },
                    { name: 'Order and send PO – external glazing (windows and doors)', duration: 3, triggers: { task: 'Installation of external glazing – windows and external doors', waitDays: 36 } },
                    { name: 'Order and send PO – tiles', duration: 3 },
                    { name: 'Initial project team meeting (PM, SM, QS, architect, coordinator)', duration: 3 },
                    { name: 'Coordination meeting – Electrician', duration: 3 },
                    { name: 'Coordination meeting – Plumber', duration: 3 },
                    { name: 'Coordination meeting – Mechanical contractor', duration: 3 },
                    { name: 'Coordination meeting – Roofer', duration: 3 },
                    { name: 'Scaffold order and delivery confirmation', duration: 3 },
                    { name: 'Confirm scaffolding erection date and access routes', duration: 3 },
                    { name: 'Notify and confirm dates with Building Control', duration: 3 },
                    { name: 'Pre-construction documents – review and check log (drawings, specs, RAMS, CDM)', duration: 3 }
                ]
            },
            'site-setup': {
                name: 'Site Setup',
                color: '#8E4A9B',
                tasks: [
                    { name: 'Temporary site fencing and hoarding installation', duration: 3 },
                    { name: 'Temporary signage and H&S boards (fire plan, PPE, contact details)', duration: 3 },
                    { name: 'Disconnection of existing services – power, water, heating, VRF units', duration: 3 },
                    { name: 'Welfare setup – toilets, canteen, drying room', duration: 3 },
                    { name: 'Power connection (temporary builder\'s supply or generator)', duration: 3 },
                    { name: 'Water connection (standpipe or mains)', duration: 3 },
                    { name: 'Site compound setup (containers, storage, offices)', duration: 3 },
                    { name: 'Delivery access and vehicle movement plan', duration: 3 },
                    { name: 'Fire points installation and fire extinguishers positioned', duration: 3 },
                    { name: 'First aid station and point of contact on site', duration: 3 },
                    { name: 'Waste management setup (skips, segregation, collection plan)', duration: 3 },
                    { name: 'CCTV and security system installation (cameras, site access control)', duration: 3 },
                    { name: 'Movement point installation', duration: 3 }
                ]
            },
            'demolition-strip-out': {
                name: 'Demolition & Strip-out',
                color: '#C44545',
                tasks: [
                    { name: 'Strip-out of internal finishes (walls, floors, ceilings)', duration: 5 },
                    { name: 'Strip-out of M&E installations (electrical, plumbing, mechanical)', duration: 5 },
                    { name: 'Dismantling of suspended ceilings and wall cladding', duration: 5 },
                    { name: 'Removal of existing roof structure', duration: 5 },
                    { name: 'Demolition of internal walls and partitions', duration: 5 },
                    { name: 'Demolition of external structural walls (if applicable)', duration: 5 },
                    { name: 'Removal of internal and external doors and windows', duration: 5 },
                    { name: 'Asbestos survey and removal by licensed specialist', duration: 5 }
                ]
            },
            'sub-construction': {
                name: 'Sub-Construction',
                color: '#6D5147',
                tasks: [
                    { name: 'Site strip and reduced level dig', duration: 5 },
                    { name: 'Foundation excavation and trench preparation', duration: 5, triggers: { task: 'Concrete foundation pouring (strip, pad, raft as required)', waitDays: 0 } },
                    { name: 'Installation of temporary ground supports / shuttering', duration: 5 },
                    { name: 'Temporary support – design and installation of propping / shoring system', duration: 5 },
                    { name: 'Drainage installation (foul and surface water)', duration: 5 },
                    { name: 'Underground services trenching (water, power, ducting)', duration: 5 },
                    { name: 'Concrete foundation pouring (strip, pad, raft as required)', duration: 5, triggers: { task: 'Construction of external walls (blockwork / masonry / timber)', waitDays: 1 } },
                    { name: 'DPM and insulation to foundation base', duration: 5 },
                    { name: 'Basement excavation (if applicable)', duration: 5 },
                    { name: 'Basement underpinning and temporary support (if applicable)', duration: 5 },
                    { name: 'Basement slab – reinforcement and concrete pour (if applicable)', duration: 5 },
                    { name: 'Underpinning of existing structures', duration: 5 },
                    { name: 'Retaining walls / upstand walls', duration: 5 },
                    { name: 'Below-ground waterproofing or tanking system installation', duration: 5 }
                ]
            },
            'construction-main-structure': {
                name: 'Construction – Main Structure',
                color: '#687885',
                tasks: [
                    { name: 'Installation of structural steel beams, columns and connections', duration: 7 },
                    { name: 'Construction of external walls (blockwork / masonry / timber)', duration: 7 },
                    { name: 'Timber floor construction – installation of joists and deck', duration: 7 },
                    { name: 'Construction of roof timber structure (rafters, ridges, purlins)', duration: 7 },
                    { name: 'Installation of rooflight(s)', duration: 7 },
                    { name: 'Construction of dormers', duration: 7 },
                    { name: 'Installation of roof coverings (tiles, membrane, sheathing)', duration: 7 },
                    { name: 'Roof insulation including vapour control layer (VCL)', duration: 7 },
                    { name: 'Installation of flashings, leadwork and zinc detailing', duration: 7 },
                    { name: 'Installation of guttering and rainwater downpipes', duration: 7 },
                    { name: 'Installation of external glazing – windows and external doors', duration: 7 },
                    { name: 'Installation of external wall insulation or cladding fixings', duration: 7 },
                    { name: 'Brickwork pointing to external walls and features', duration: 7 }
                ]
            },
            'internal-works': {
                name: 'Internal Works',
                color: '#3A9CA7',
                tasks: [
                    { name: 'Internal wall construction – stud partitions, acoustic & fire-rated', duration: 5 },
                    { name: 'Construction of ceiling framing (SAS grid, MF structure)', duration: 5 },
                    { name: 'Creation of service risers, shafts and duct zones', duration: 5 },
                    { name: 'Internal insulation – acoustic, thermal, fire', duration: 5 },
                    { name: 'Service openings only (for MEP routes)', duration: 5 },
                    { name: 'Screed floor installation including insulation and DPM', duration: 5, triggers: { task: 'Timber / LVT / vinyl / carpet flooring installation', waitDays: 14 } },
                    { name: 'Plastering to walls and ceilings', duration: 5 },
                    { name: 'Staircase installation', duration: 5 },
                    { name: 'Fire stopping installation', duration: 5 }
                ]
            },
            'me-1st-fix': {
                name: 'M&E 1st fix',
                color: '#4178B5',
                tasks: [
                    { name: 'Containments (cable trays, trunking, conduits)', duration: 5 },
                    { name: 'Electrical wiring – 1st fix to all areas', duration: 5 },
                    { name: 'Small power – 1st fix to all areas', duration: 5 },
                    { name: 'Lighting circuits – 1st fix wiring', duration: 5 },
                    { name: 'Fire alarm – 1st fix: cabling and containment', duration: 5 },
                    { name: 'Intruder alarm – 1st fix: cabling and zones', duration: 5 },
                    { name: 'Data cabling – 1st fix: Cat6/fibre runs', duration: 5 },
                    { name: 'CCTV – 1st fix: cable runs to camera locations', duration: 5 },
                    { name: 'Access control – 1st fix: cable runs to doors', duration: 5 },
                    { name: 'DDA and refuge alarm – 1st fix: cabling', duration: 5 },
                    { name: 'Plumbing – 1st fix to bathrooms and toilets', duration: 5 },
                    { name: 'Plumbing – 1st fix to kitchens and tea points', duration: 5 },
                    { name: 'Plumbing – 1st fix to boiler/tank rooms', duration: 5 },
                    { name: 'UFH – 1st fix: pipework in screed zones', duration: 5 },
                    { name: 'VRF system – 1st fix: refrigerant pipework and cabling', duration: 5 },
                    { name: 'Ventilation – 1st fix: ductwork installation', duration: 5 },
                    { name: 'Fresh air system – 1st fix: main duct runs', duration: 5 },
                    { name: 'Above ceiling services coordination', duration: 5 },
                    { name: 'Riser services – 1st fix: vertical runs', duration: 5 },
                    { name: 'BMS – 1st fix: cabling to field devices', duration: 5 },
                    { name: 'Lightning protection – 1st fix: down conductors', duration: 5 },
                    { name: 'Earthing and bonding – main runs', duration: 5 }
                ]
            },
            'me-2nd-fix': {
                name: 'M&E 2nd fix',
                color: '#3A4488',
                tasks: [
                    { name: 'Plumbing – 2nd fix to bathrooms, toilets and kitchens', duration: 5 },
                    { name: 'Plumbing – 2nd fix to boiler and tank room', duration: 5 },
                    { name: 'UFH – 2nd fix: manifold commissioning, thermostats', duration: 5 },
                    { name: 'Electrical – 2nd fix power outlets and lighting fixtures', duration: 5 },
                    { name: 'Lighting Control (DALI) – 2nd fix: sensors, panels, testing', duration: 5 },
                    { name: 'Fire Alarm – 2nd fix: devices and testing', duration: 5 },
                    { name: 'Intruder Alarm – 2nd fix: sensors, control panel', duration: 5 },
                    { name: 'Data – 2nd fix: terminations, patch panels, faceplates', duration: 5 },
                    { name: 'CCTV – 2nd fix: camera mounting and connection', duration: 5 },
                    { name: 'Access Control – 2nd fix: readers, locks, interfaces', duration: 5 },
                    { name: 'DDA and Refuge Alarm – 2nd fix: beacons, buttons', duration: 5 },
                    { name: 'VRF – 2nd fix: indoor unit installation', duration: 5 },
                    { name: 'Ventilation – 2nd fix: grilles, diffusers, controls', duration: 5 },
                    { name: 'UPS – 2nd fix: connection and battery setup', duration: 5 },
                    { name: 'BMS – 2nd fix: commissioning sensors, controllers', duration: 5 },
                    { name: 'Lightning Protection – final bonding and certification', duration: 5 }
                ]
            },
            'finishing': {
                name: 'Finishing',
                color: '#5A8E5E',
                tasks: [
                    { name: 'Installation of internal doors and ironmongery', duration: 5 },
                    { name: 'Installation of skirting boards, architraves, trims', duration: 5 },
                    { name: 'Installation of built-in joinery – wardrobes, shelving, cabinetry', duration: 5 },
                    { name: 'Installation of kitchen units', duration: 5 },
                    { name: 'Installation of kitchen worktops', duration: 5 },
                    { name: 'Tiling to bathrooms, kitchens and splashbacks', duration: 5 },
                    { name: 'Installation of bathroom fixtures and accessories (mirrors, towel rails, etc.)', duration: 5 },
                    { name: 'Timber / LVT / vinyl / carpet flooring installation', duration: 5 },
                    { name: 'Decoration – mist coat, filler, sanding, top coats', duration: 5 },
                    { name: 'Feature finishes – wall panelling, wallpaper, special paint', duration: 5 },
                    { name: 'Sealants and mastic application (bathrooms, skirting, architraves)', duration: 5 }
                ]
            },
            'external-works': {
                name: 'External Works',
                color: '#7D4A8A',
                tasks: [
                    { name: 'Site clearance and grading of external levels', duration: 5 },
                    { name: 'Installation of surface water drainage and soakaways', duration: 5 },
                    { name: 'Construction of retaining walls and boundary walls', duration: 5 },
                    { name: 'Installation of ducting for external services (power, lighting, comms)', duration: 5 },
                    { name: 'Installation of sub-base and edging for paving', duration: 5 },
                    { name: 'Laying of paving / slab paths / resin / block paving', duration: 5 },
                    { name: 'Installation of kerbs, steps and ramps', duration: 5 },
                    { name: 'Tarmac or asphalt surfacing to driveways and access roads', duration: 5 },
                    { name: 'Installation of fencing and gates', duration: 5 },
                    { name: 'Soft landscaping – turfing, planting, mulching', duration: 5 }
                ]
            },
            'testing-commissioning': {
                name: 'Testing & Commissioning',
                color: '#8A8A8A',
                tasks: [
                    { name: 'Electrical installation testing and NICEIC certification', duration: 3 },
                    { name: 'Emergency lighting testing and certification', duration: 3 },
                    { name: 'Fire alarm system testing and commissioning', duration: 3 },
                    { name: 'Intruder alarm system testing and handover', duration: 3 },
                    { name: 'Access control system testing (incl. door release, fobs)', duration: 3 },
                    { name: 'Data and network cabling testing (signal, patch panels)', duration: 3 },
                    { name: 'Plumbing system testing – water pressure, flow, leaks', duration: 3 },
                    { name: 'Heating system testing – boilers, radiators, controls', duration: 3 },
                    { name: 'Ventilation system commissioning and air flow balancing', duration: 3 },
                    { name: 'VRF / AC commissioning and controls setup', duration: 3 },
                    { name: 'BMS commissioning (sensors, relays, user interface)', duration: 3 },
                    { name: 'CCTV system testing and recording verification', duration: 3 },
                    { name: 'UPS system testing and runtime check', duration: 3 },
                    { name: 'Air tightness testing', duration: 3 },
                    { name: 'Insulation resistance and continuity testing', duration: 3 },
                    { name: 'Hot water system testing and temperature balancing', duration: 3 }
                ]
            },
            'handover-practical-completion': {
                name: 'Handover / Practical Completion',
                color: '#E6C441',
                tasks: [
                    { name: 'Final internal cleaning (builders\' clean and sparkle clean)', duration: 3 },
                    { name: 'Removal of all protection, waste and surplus materials', duration: 3 },
                    { name: 'Final snagging walkaround (internal and external)', duration: 3 },
                    { name: 'Rectification of snags (joinery, painting, alignment etc.)', duration: 3 },
                    { name: 'Final fire stopping inspection and sign-off', duration: 3 },
                    { name: 'Final Building Control inspection and certificate', duration: 3 },
                    { name: 'Fire alarm and emergency lighting certification handover', duration: 3 },
                    { name: 'Electrical certification (NICEIC, Part P etc.)', duration: 3 },
                    { name: 'Gas Safe certification', duration: 3 },
                    { name: 'SAP / EPC certificates', duration: 3 },
                    { name: 'FENSA certificate for glazing', duration: 3 },
                    { name: 'Air tightness test report', duration: 3 },
                    { name: 'M&E consultant witnessing and sign-off', duration: 3 },
                    { name: 'Compilation and issue of commissioning certificates', duration: 3 },
                    { name: 'Handover of O&M manuals, warranties and as-built drawings', duration: 3 },
                    { name: 'Client demonstration and formal practical completion sign-off', duration: 3 }
                ]
            }
        };
        
        // Default milestones
        const defaultMilestones = [
            'Building Control Inspection',
            'Client Approval',
            'Power Connected',
            'Kitchen Delivery',
            'Windows Delivery',
            'Scaffolding Erected',
            'Scaffolding Removed',
            'Structural Inspection',
            'Electrical Sign-off',
            'Plumbing Sign-off',
            'Final Inspection',
            'Practical Completion',
            'Payment Due'
        ];
        
        // Available groups
        let availableGroups = {};
        
        // Calculate project dates
        const projectStart = new Date('2025-01-01');
        const projectEnd = new Date('2025-12-31');
        const totalProjectDays = 365;
        
        // Holiday dates
        const holidays = [
            { date: '2025-01-01', name: 'New Year' },
            { date: '2025-12-25', name: 'Christmas' },
            { date: '2025-12-26', name: 'Boxing Day' },
            { date: '2025-12-31', name: 'New Year Eve' }
        ];
        
        // All tasks
        let allTasks = [];
        let allMilestones = [];
        
        // Add unique IDs
        let taskIdCounter = 0;
        let milestoneIdCounter = 0;
        
        // Context menu variables
        let currentTaskForMenu = null;
        let currentBarForMenu = null;
        let currentMilestoneForMenu = null;
        
        // Make all modal/global functions available immediately
        window.showAddGroupModal = showAddGroupModal;
        window.closeModal = closeModal;
        window.addNewGroup = addNewGroup;
        window.setBaseline = setBaseline;
        window.confirmBaseline = confirmBaseline;
        window.changePassword = changePassword;
        window.confirmPasswordChange = confirmPasswordChange;
        window.showAddTaskModal = showAddTaskModal;
        window.confirmAddTask = confirmAddTask;
        window.showAddMilestoneModal = showAddMilestoneModal;
        window.confirmAddMilestone = confirmAddMilestone;
        window.showSetDependencyModal = showSetDependencyModal;
        window.confirmSetDependency = confirmSetDependency;
        window.toggleSort = toggleSort;
        window.toggleDependencies = toggleDependencies;
        window.shiftMonthsLeft = shiftMonthsLeft;
        window.shiftMonthsRight = shiftMonthsRight;
        window.addMonth = addMonth;
        window.removeMonth = removeMonth;
        window.exportToJSON = exportToJSON;
        window.exportToExcel = exportToExcel;
        window.exportToPDF = exportToPDF;
        window.importProject = importProject;
        window.newProject = newProject;
        window.confirmEditMilestone = confirmEditMilestone;
        window.editMilestone = editMilestone;
        window.deleteMilestone = deleteMilestone;
        
        // Theme management
        function loadTheme() {
            const savedTheme = localStorage.getItem('ganttTheme') || 'dark';
            if (savedTheme === 'light') {
                document.body.classList.add('light-theme');
                const icon = document.getElementById('themeIcon');
                if (icon) icon.textContent = '🌙';
            }
        }
        
        function toggleTheme() {
            const isLight = document.body.classList.contains('light-theme');
            
            if (isLight) {
                document.body.classList.remove('light-theme');
                document.getElementById('themeIcon').textContent = '☀️';
                localStorage.setItem('ganttTheme', 'dark');
            } else {
                document.body.classList.add('light-theme');
                document.getElementById('themeIcon').textContent = '🌙';
                localStorage.setItem('ganttTheme', 'light');
            }
        }
        
        window.toggleTheme = toggleTheme;
        
        // Helper functions
        function formatDateRange(startDate, endDate) {
            if (startDate.getMonth() === endDate.getMonth()) {
                return `${formatMonthDay(startDate)} - ${endDate.getDate()}`;
            }
            return `${formatMonthDay(startDate)} - ${formatMonthDay(endDate)}`;
        }
        
        function createSelectOptions(selectElement, tasks, currentTaskId = null) {
            selectElement.innerHTML = '<option value="">None</option>';
            tasks.forEach(task => {
                if (!currentTaskId || task.id !== currentTaskId) {
                    const option = document.createElement('option');
                    option.value = task.id;
                    option.textContent = task.name;
                    selectElement.appendChild(option);
                }
            });
        }
        
        function updateMilestoneDates(milestone, newLeft, timelineCell) {
            const visibleDays = getVisibleDays();
            const { start: visibleStart } = getVisibleDateRange();
            
            const dayOffset = Math.round((newLeft / 100) * visibleDays);
            const newDate = new Date(visibleStart);
            newDate.setDate(newDate.getDate() + dayOffset);
            
            milestone.date = newDate.toISOString().split('T')[0];
            saveMilestones();
        }
        
        // Milestone dragging handlers
        function handleMilestoneDrag(e, diamond, milestoneId) {
            // Ignore right-click
            if (e.button === 2) return;
            
            e.preventDefault();
            const startX = e.clientX;
            const originalLeft = parseFloat(diamond.style.left);
            const timelineCell = diamond.parentElement;
            
            diamond.classList.add('dragging');
            
            function handleMouseMove(e) {
                const deltaX = e.clientX - startX;
                const timelineWidth = timelineCell.offsetWidth;
                const deltaPercent = (deltaX / timelineWidth) * 100;
                const newLeft = Math.max(0, Math.min(100, originalLeft + deltaPercent));
                diamond.style.left = `${newLeft}%`;
            }
            
            function handleMouseUp() {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
                diamond.classList.remove('dragging');
                
                const milestone = allMilestones.find(m => m.id === milestoneId);
                if (milestone) {
                    updateMilestoneDates(milestone, parseFloat(diamond.style.left), timelineCell);
                }
            }
            
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }
        
        // Zoom functions
        let currentZoom = 100;
        
        function zoomIn() {
            if (currentZoom < 150) {
                currentZoom += 10;
                applyZoom();
            }
        }
        
        function zoomOut() {
            if (currentZoom > 50) {
                currentZoom -= 10;
                applyZoom();
            }
        }
        
        function zoomReset() {
            currentZoom = 100;
            applyZoom();
        }
        
        function applyZoom() {
            const container = document.querySelector('.chart-container');
            const wrapper = document.querySelector('.chart-wrapper');
            
            if (container) {
                // Scale everything proportionally
                const scale = currentZoom / 100;
                container.style.fontSize = `${12 * scale}px`;
                
                // Adjust row heights
                document.querySelectorAll('.chart-row, .add-task-row').forEach(row => {
                    row.style.height = `${21 * scale}px`;
                });
                
                // Adjust gantt bar heights
                document.querySelectorAll('.gantt-bar, .gantt-baseline').forEach(bar => {
                    bar.style.height = `${14 * scale}px`;
                    bar.style.top = `${2 * scale}px`;
                });
                
                // Adjust milestone sizes
                document.querySelectorAll('.milestone').forEach(milestone => {
                    milestone.style.width = `${14 * scale}px`;
                    milestone.style.height = `${14 * scale}px`;
                    milestone.style.top = `${1 * scale}px`;
                });
                
                // Adjust input field sizes
                document.querySelectorAll('.days-input').forEach(input => {
                    input.style.fontSize = `${10 * scale}px`;
                    input.style.height = `${14 * scale}px`;
                });
                
                // Redraw dependency lines after zoom
                if (showDependencies) {
                    setTimeout(() => {
                        drawDependencyLines();
                    }, 50);
                }
                
                // Update zoom indicator
                const zoomBtn = document.querySelector('[onclick="zoomReset()"]');
                if (zoomBtn) {
                    zoomBtn.textContent = `${currentZoom}%`;
                }
            }
        }
        
        // Make zoom functions global
        window.zoomIn = zoomIn;
        window.zoomOut = zoomOut;
        window.zoomReset = zoomReset;
        
        // Sort and dependencies toggles
        function toggleSort() {
            sortMode = sortMode === 'added' ? 'date' : 'added';
            document.getElementById('sortBtn').textContent = `Sort by: ${sortMode === 'added' ? 'Added' : 'Date'}`;
            generateChart();
        }
        
        function toggleDependencies() {
            showDependencies = !showDependencies;
            document.getElementById('dependenciesBtn').textContent = `Dependencies: ${showDependencies ? 'ON' : 'OFF'}`;
            document.getElementById('dependenciesBtn').classList.toggle('active', showDependencies);
            generateChart();
        }
        
        // Make sure dependencies are ON by default
        showDependencies = true;
        
        // Month range functions
        function updateMonthRange() {
            if (allTasks.length === 0) {
                startMonthOffset = 0;
                monthsToShow = 12;
                updateMonthRangeInfo();
                generateMonthsHeader();
                generateChart();
                return;
            }
            
            let firstTaskDate = null;
            let lastTaskDate = null;
            
            allTasks.forEach(task => {
                const start = new Date(task.currentStart || task.start);
                const end = new Date(task.currentEnd || task.end);
                
                if (!firstTaskDate || start < firstTaskDate) {
                    firstTaskDate = start;
                }
                if (!lastTaskDate || end > lastTaskDate) {
                    lastTaskDate = end;
                }
            });
            
            if (firstTaskDate && lastTaskDate) {
                const firstMonth = firstTaskDate.getMonth();
                const lastMonth = lastTaskDate.getMonth();
                const monthsNeeded = lastMonth - firstMonth + 1;
                
                startMonthOffset = firstMonth;
                monthsToShow = Math.max(monthsNeeded, 2);
            }
            
            updateMonthRangeInfo();
            generateMonthsHeader();
            generateChart();
        }
        
        function shiftMonthsLeft() {
            if (startMonthOffset > 0) {
                startMonthOffset--;
                updateMonthRangeInfo();
                generateMonthsHeader();
                generateChart();
            }
        }
        
        function shiftMonthsRight() {
            if (startMonthOffset + monthsToShow < 12) {
                startMonthOffset++;
                updateMonthRangeInfo();
                generateMonthsHeader();
                generateChart();
            }
        }
        
        function addMonth() {
            if (startMonthOffset + monthsToShow < 12) {
                monthsToShow++;
                updateMonthRangeInfo();
                generateMonthsHeader();
                generateChart();
            }
        }
        
        function removeMonth() {
            if (monthsToShow > 2) {
                monthsToShow--;
                updateMonthRangeInfo();
                generateMonthsHeader();
                generateChart();
            }
        }
        
        function updateMonthRangeInfo() {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const startMonth = months[startMonthOffset];
            const endMonth = months[Math.min(startMonthOffset + monthsToShow - 1, 11)];
            document.getElementById('monthRangeInfo').textContent = `${startMonth} - ${endMonth} 2025`;
            
            document.getElementById('shiftLeftBtn').disabled = startMonthOffset <= 0;
            document.getElementById('shiftRightBtn').disabled = startMonthOffset + monthsToShow >= 12;
            document.getElementById('removeMonthBtn').disabled = monthsToShow <= 2;
            document.getElementById('addMonthBtn').disabled = startMonthOffset + monthsToShow >= 12;
        }
        
        function getVisibleDateRange() {
            const start = new Date(2025, startMonthOffset, 1);
            const end = new Date(2025, startMonthOffset + monthsToShow, 0);
            return { start, end };
        }
        
        function getVisibleDays() {
            const { start, end } = getVisibleDateRange();
            return Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;
        }
        
        // Configuration management
        function loadConfiguration() {
            const config = localStorage.getItem('ganttConfig');
            if (config) {
                const parsed = JSON.parse(config);
                projectTitle = parsed.title || projectTitle;
                projectPassword = parsed.password || null;
                projectBaseline = parsed.baseline || null;
                document.getElementById('projectTitle').value = projectTitle;
            }
        }
        
        function saveConfiguration() {
            const config = {
                title: projectTitle,
                password: projectPassword,
                baseline: projectBaseline
            };
            localStorage.setItem('ganttConfig', JSON.stringify(config));
        }
        
        document.getElementById('projectTitle').addEventListener('input', function() {
            projectTitle = this.value;
            saveConfiguration();
        });
        
        // Groups management
        function loadCustomGroups() {
            const saved = localStorage.getItem('customGroups');
            if (saved) {
                availableGroups = JSON.parse(saved);
            }
            updateLegend();
            updateGroupStyles();
            updateNewTaskGroupOptions();
        }
        
        function saveCustomGroups() {
            localStorage.setItem('customGroups', JSON.stringify(availableGroups));
        }
        
        function updateLegend() {
            const legend = document.getElementById('legend');
            legend.innerHTML = '';
            
            Object.entries(availableGroups).forEach(([key, value]) => {
                const item = document.createElement('div');
                item.className = 'legend-item custom';
                
                item.innerHTML = `
                    <div class="legend-color" style="background: ${value.color};"></div>
                    <span>${value.name}</span>
                `;
                
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-group-btn';
                deleteBtn.innerHTML = '×';
                deleteBtn.title = 'Delete group';
                deleteBtn.onclick = (e) => {
                    e.stopPropagation();
                    if (confirm(`Delete group "${value.name}"?`)) {
                        deleteGroup(key);
                    }
                };
                item.appendChild(deleteBtn);
                
                legend.appendChild(item);
            });
            
            const btn = document.createElement('button');
            btn.className = 'add-group-btn';
            btn.textContent = '+ Add Group';
            btn.onclick = showAddGroupModal;
            legend.appendChild(btn);
        }
        
        function deleteGroup(key) {
            allTasks = allTasks.filter(task => task.group !== key);
            allMilestones = allMilestones.filter(milestone => milestone.group !== key);
            
            delete availableGroups[key];
            saveCustomGroups();
            saveTasks();
            saveMilestones();
            updateLegend();
            updateGroupStyles();
            updateNewTaskGroupOptions();
            generateChart();
        }
        
        function updateGroupStyles() {
            let style = document.getElementById('dynamicGroupStyles');
            if (!style) {
                style = document.createElement('style');
                style.id = 'dynamicGroupStyles';
                document.head.appendChild(style);
            }
            
            let css = '';
            Object.entries(availableGroups).forEach(([key, value]) => {
                css += `.gantt-bar.${key} { background: ${value.color}; }\n`;
                css += `.gantt-baseline.${key} { border-color: ${value.color}33; }\n`;
                css += `.task-name.${key}::after { background: ${value.color}; }\n`;
            });
            style.textContent = css;
        }
        
        function updateNewTaskGroupOptions() {
            const selects = [
                document.getElementById('newTaskGroup'),
                document.getElementById('newMilestoneGroup')
            ];
            
            selects.forEach(select => {
                if (select) {
                    select.innerHTML = '';
                    
                    if (Object.keys(availableGroups).length === 0) {
                        const option = document.createElement('option');
                        option.value = '';
                        option.textContent = 'No groups available';
                        option.disabled = true;
                        select.appendChild(option);
                    } else {
                        Object.entries(availableGroups).forEach(([key, value]) => {
                            const option = document.createElement('option');
                            option.value = key;
                            option.textContent = value.name;
                            select.appendChild(option);
                        });
                    }
                }
            });
        }
        
        // Modals
        function showAddGroupModal() {
            document.querySelector('input[name="groupType"][value="template"]').checked = true;
            document.getElementById('templateGroupSection').style.display = 'block';
            document.getElementById('customGroupSection').style.display = 'none';
            document.getElementById('templateGroupSelect').value = '';
            document.getElementById('templateStartDate').value = new Date().toISOString().split('T')[0];
            document.getElementById('templateInfo').style.display = 'none';
            
            document.getElementById('addGroupModal').style.display = 'block';
        }
        
        document.querySelectorAll('input[name="groupType"]').forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'template') {
                    document.getElementById('templateGroupSection').style.display = 'block';
                    document.getElementById('customGroupSection').style.display = 'none';
                } else {
                    document.getElementById('templateGroupSection').style.display = 'none';
                    document.getElementById('customGroupSection').style.display = 'block';
                }
            });
        });
        
        document.getElementById('templateGroupSelect').addEventListener('change', function() {
            if (this.value) {
                document.getElementById('templateInfo').style.display = 'block';
                const template = groupTemplates[this.value];
                document.getElementById('templateInfo').textContent = 
                    `Will add ${template.tasks.length} tasks to the project`;
            } else {
                document.getElementById('templateInfo').style.display = 'none';
            }
        });
        
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
            const modal = document.getElementById(modalId);
            modal.querySelectorAll('input').forEach(input => {
                if (input.type !== 'color' && input.type !== 'radio') {
                    input.value = '';
                }
            });
            modal.querySelectorAll('textarea').forEach(textarea => {
                textarea.value = '';
            });
        }
        
        function addNewGroup() {
            const groupType = document.querySelector('input[name="groupType"]:checked').value;
            
            if (groupType === 'template') {
                const templateKey = document.getElementById('templateGroupSelect').value;
                const startDate = document.getElementById('templateStartDate').value;
                
                if (!templateKey) {
                    alert('Please select a template group');
                    return;
                }
                
                if (!startDate) {
                    alert('Please select a start date');
                    return;
                }
                
                if (availableGroups[templateKey]) {
                    alert('This group already exists in the project');
                    return;
                }
                
                const template = groupTemplates[templateKey];
                availableGroups[templateKey] = {
                    name: template.name,
                    color: template.color
                };
                
                // Create map to store task references
                const taskMap = {};
                
                const groupStartDate = new Date(startDate);
                let currentDate = new Date(groupStartDate);
                
                template.tasks.forEach((taskTemplate, index) => {
                    const taskStart = new Date(currentDate);
                    const taskEnd = new Date(taskStart);
                    taskEnd.setDate(taskEnd.getDate() + taskTemplate.duration - 1);
                    
                    const newTask = {
                        id: taskIdCounter++,
                        name: taskTemplate.name,
                        start: taskStart.toISOString().split('T')[0],
                        end: taskEnd.toISOString().split('T')[0],
                        group: templateKey,
                        originalName: taskTemplate.name,
                        originalGroup: templateKey,
                        dependency: null
                    };
                    
                    allTasks.push(newTask);
                    taskMap[taskTemplate.name] = newTask;
                    
                    // Move to next task start date
                    currentDate = new Date(taskEnd);
                    currentDate.setDate(currentDate.getDate() + 1);
                });
                
                // Set up dependencies after all tasks are created
                template.tasks.forEach(taskTemplate => {
                    if (taskTemplate.triggers && taskTemplate.triggers.task) {
                        const fromTask = taskMap[taskTemplate.name];
                        const toTask = taskMap[taskTemplate.triggers.task];
                        
                        if (fromTask && toTask) {
                            toTask.dependency = {
                                taskId: fromTask.id,
                                waitDays: taskTemplate.triggers.waitDays
                            };
                        }
                    }
                });
                
            } else {
                const name = document.getElementById('groupName').value.trim();
                const color = document.getElementById('groupColor').value;
                
                if (!name) {
                    alert('Please enter a group name');
                    return;
                }
                
                const key = name.toLowerCase().replace(/\s+/g, '-');
                availableGroups[key] = { name, color };
            }
            
            saveCustomGroups();
            saveChanges();
            saveTasks();
            updateLegend();
            updateGroupStyles();
            updateNewTaskGroupOptions();
            updateMonthRange();
            closeModal('addGroupModal');
        }
        
        // Tasks management
        function showAddTaskModal() {
            if (Object.keys(availableGroups).length === 0) {
                alert('Please add at least one group before adding tasks');
                return;
            }
            
            // Fill dependency group select
            const depGroupSelect = document.getElementById('dependencyGroupSelect');
            depGroupSelect.innerHTML = '<option value="">Wybierz grupę</option>';
            Object.entries(availableGroups).forEach(([key, group]) => {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = group.name;
                depGroupSelect.appendChild(option);
            });
            
            // Clear task select
            const depTaskSelect = document.getElementById('newTaskDependsOn');
            depTaskSelect.innerHTML = '<option value="">None</option>';
            
            // Add onchange handler for dependency group
            depGroupSelect.onchange = function() {
                depTaskSelect.innerHTML = '<option value="">None</option>';
                
                if (this.value) {
                    const tasksInGroup = allTasks.filter(t => t.group === this.value);
                    tasksInGroup.forEach(t => {
                        const option = document.createElement('option');
                        option.value = t.id;
                        option.textContent = t.name;
                        depTaskSelect.appendChild(option);
                    });
                }
            };
            
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('newTaskStart').value = today;
            document.getElementById('newTaskEnd').value = today;
            document.getElementById('addTaskModal').style.display = 'block';
        }
        
        function confirmAddTask() {
            const name = document.getElementById('newTaskName').value.trim();
            const start = document.getElementById('newTaskStart').value;
            const end = document.getElementById('newTaskEnd').value;
            const group = document.getElementById('newTaskGroup').value;
            const dependsOn = document.getElementById('newTaskDependsOn').value;
            const waitDays = parseInt(document.getElementById('newTaskWaitDays').value) || 0;
            
            if (!name || !start || !end) {
                alert('Please fill all fields');
                return;
            }
            
            if (new Date(start) > new Date(end)) {
                alert('End date cannot be before start date');
                return;
            }
            
            const newTask = {
                id: taskIdCounter++,
                name: name.substring(0, 50),
                start: start,
                end: end,
                group: group,
                originalName: name.substring(0, 50),
                originalGroup: group,
                dependency: dependsOn ? { taskId: parseInt(dependsOn), waitDays: waitDays } : null
            };
            
            allTasks.push(newTask);
            
            saveChanges();
            saveTasks();
            updateMonthRange();
            closeModal('addTaskModal');
        }
        
        // Milestones
        function showAddMilestoneModal() {
            if (Object.keys(availableGroups).length === 0) {
                alert('Please add at least one group before adding milestones');
                return;
            }
            
            // Update tasks dropdown using helper function
            createSelectOptions(document.getElementById('newMilestoneTask'), allTasks);
            
            // Pre-fill with common milestones
            const nameInput = document.getElementById('newMilestoneName');
            nameInput.placeholder = 'Enter milestone name or select from list';
            const datalist = document.createElement('datalist');
            datalist.id = 'milestonesList';
            
            // Add empty option for custom input
            const customOption = document.createElement('option');
            customOption.value = '';
            datalist.appendChild(customOption);
            
            defaultMilestones.forEach(ms => {
                const option = document.createElement('option');
                option.value = ms;
                datalist.appendChild(option);
            });
            nameInput.setAttribute('list', 'milestonesList');
            if (!document.getElementById('milestonesList')) {
                nameInput.parentNode.appendChild(datalist);
            }
            
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('newMilestoneDate').value = today;
            document.getElementById('addMilestoneModal').style.display = 'block';
        }
        
        function confirmAddMilestone() {
            const name = document.getElementById('newMilestoneName').value.trim();
            const date = document.getElementById('newMilestoneDate').value;
            const taskId = document.getElementById('newMilestoneTask').value;
            const group = document.getElementById('newMilestoneGroup').value;
            const notes = document.getElementById('newMilestoneNotes').value.trim();
            
            if (!name || !date) {
                alert('Please fill name and date');
                return;
            }
            
            const newMilestone = {
                id: milestoneIdCounter++,
                name: name.substring(0, 50),
                date: date,
                taskId: taskId ? parseInt(taskId) : null,
                group: group,
                notes: notes
            };
            
            allMilestones.push(newMilestone);
            saveMilestones();
            generateChart();
            closeModal('addMilestoneModal');
        }
        
        // Set dependency modal functions - FIXED VERSION
        function showSetDependencyModal(task) {
            const dependsSelect = document.getElementById('dependsOnSelect');
            const triggersSelect = document.getElementById('triggersSelect');
            const triggerGroupSelect = document.getElementById('triggerGroupSelect');
            
            // Najpierw wyczyść i wypełnij dropdown grup
            triggerGroupSelect.innerHTML = '<option value="">Wybierz grupę...</option>';
            Object.entries(availableGroups).forEach(([key, group]) => {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = group.name;
                triggerGroupSelect.appendChild(option);
            });
            
            // Wyczyść dropdown zadań
            triggersSelect.innerHTML = '<option value="">Najpierw wybierz grupę</option>';
            triggersSelect.disabled = true;
            
            // Dodaj listener na zmianę grupy
            triggerGroupSelect.onchange = function() {
                triggersSelect.innerHTML = '<option value="">None</option>';
                
                if (this.value) {
                    // Włącz dropdown zadań
                    triggersSelect.disabled = false;
                    
                    // Filtruj zadania po wybranej grupie
                    const tasksInGroup = allTasks.filter(t => 
                        t.group === this.value && t.id !== task.id
                    );
                    
                    tasksInGroup.forEach(t => {
                        const option = document.createElement('option');
                        option.value = t.id;
                        option.textContent = t.name;
                        triggersSelect.appendChild(option);
                    });
                    
                    if (tasksInGroup.length === 0) {
                        triggersSelect.innerHTML = '<option value="">Brak zadań w tej grupie</option>';
                        triggersSelect.disabled = true;
                    }
                } else {
                    triggersSelect.innerHTML = '<option value="">Najpierw wybierz grupę</option>';
                    triggersSelect.disabled = true;
                }
            };
            
            // Create options for "depends on" (to zostaje jak było)
            createSelectOptions(dependsSelect, allTasks, task.id);
            
            // Set current "depends on" if exists
            if (task.dependency) {
                dependsSelect.value = task.dependency.taskId;
                document.getElementById('dependencyWaitDays').value = task.dependency.waitDays;
            } else {
                dependsSelect.value = '';
                document.getElementById('dependencyWaitDays').value = 0;
            }
            
            // Find what this task triggers
            const triggeredTask = allTasks.find(t => 
                t.dependency && t.dependency.taskId === task.id
            );
            
            if (triggeredTask) {
                // Ustaw grupę
                triggerGroupSelect.value = triggeredTask.group;
                // Wywołaj onchange żeby wypełnić zadania
                triggerGroupSelect.onchange();
                // Ustaw zadanie
                setTimeout(() => {
                    triggersSelect.value = triggeredTask.id;
                }, 10);
                document.getElementById('triggerWaitDays').value = triggeredTask.dependency.waitDays;
            } else {
                triggerGroupSelect.value = '';
                document.getElementById('triggerWaitDays').value = 0;
            }
            
            // Save which task we're editing
            window.currentTaskForDependency = task;
            
            document.getElementById('setDependencyModal').style.display = 'block';
            hideContextMenu();
        }
        
        function confirmSetDependency() {
            const task = window.currentTaskForDependency;
            
            // Handle "depends on"
            const dependsOnId = document.getElementById('dependsOnSelect').value;
            const waitDays = parseInt(document.getElementById('dependencyWaitDays').value) || 0;
            
            if (dependsOnId) {
                task.dependency = {
                    taskId: parseInt(dependsOnId),
                    waitDays: waitDays
                };
            } else {
                task.dependency = null;
            }
            
            // Handle "triggers"
            const triggersId = document.getElementById('triggersSelect').value;
            const triggerWaitDays = parseInt(document.getElementById('triggerWaitDays').value) || 0;
            
            // Remove old trigger if exists
            allTasks.forEach(t => {
                if (t.dependency && t.dependency.taskId === task.id && t.id !== parseInt(triggersId)) {
                    t.dependency = null;
                }
            });
            
            // Set new trigger
            if (triggersId) {
                const triggeredTask = allTasks.find(t => t.id === parseInt(triggersId));
                if (triggeredTask) {
                    triggeredTask.dependency = {
                        taskId: task.id,
                        waitDays: triggerWaitDays
                    };
                }
            }
            
            saveChanges();
            generateChart();
            closeModal('setDependencyModal');
        }
        
        // Delete task
        function deleteTask(taskId) {
            allTasks = allTasks.filter(t => t.id !== taskId);
            // Remove dependencies to this task
            allTasks.forEach(task => {
                if (task.dependency && task.dependency.taskId === taskId) {
                    task.dependency = null;
                }
            });
            
            saveChanges();
            saveTasks();
            generateChart();
        }
        
        // Save/Load functions
        function loadSavedChanges() {
            const saved = localStorage.getItem('ganttChanges');
            if (saved) {
                const changes = JSON.parse(saved);
                Object.entries(changes).forEach(([taskId, data]) => {
                    const task = allTasks.find(t => t.id === parseInt(taskId));
                    if (task) {
                        task.currentStart = data.start;
                        task.currentEnd = data.end;
                        if (data.name) {
                            task.name = data.name;
                        }
                        if (data.group) {
                            task.group = data.group;
                        }
                        if ('dependency' in data) {
                            task.dependency = data.dependency;
                        }
                    }
                });
            }
        }
        
        function saveChanges() {
            const changes = {};
            allTasks.forEach(task => {
                if (task.currentStart || task.currentEnd || task.name !== task.originalName || 
                    task.group !== task.originalGroup || task.dependency) {
                    changes[task.id] = {
                        start: task.currentStart || task.start,
                        end: task.currentEnd || task.end,
                        name: task.name,
                        group: task.group,
                        dependency: task.dependency
                    };
                }
            });
            localStorage.setItem('ganttChanges', JSON.stringify(changes));
            saveTasks();
        }
        
        function saveTasks() {
            localStorage.setItem('ganttTasks', JSON.stringify(allTasks));
        }
        
        function loadTasks() {
            const saved = localStorage.getItem('ganttTasks');
            if (saved) {
                try {
                    allTasks = JSON.parse(saved);
                    if (allTasks.length > 0) {
                        taskIdCounter = Math.max(...allTasks.map(t => t.id || 0)) + 1;
                    }
                } catch (e) {
                    console.error('Error loading tasks:', e);
                    allTasks = [];
                }
            }
        }
        
        function saveMilestones() {
            localStorage.setItem('ganttMilestones', JSON.stringify(allMilestones));
        }
        
        function loadMilestones() {
            const saved = localStorage.getItem('ganttMilestones');
            if (saved) {
                try {
                    allMilestones = JSON.parse(saved);
                    if (allMilestones.length > 0) {
                        milestoneIdCounter = Math.max(...allMilestones.map(m => m.id || 0)) + 1;
                    }
                } catch (e) {
                    console.error('Error loading milestones:', e);
                    allMilestones = [];
                }
            }
        }
        
        // Baseline functions
        function setBaseline() {
            if (!projectPassword) {
                document.getElementById('baselineModalHeader').textContent = 'Set first password';
                document.getElementById('baselinePassword').placeholder = 'New password';
            } else {
                document.getElementById('baselineModalHeader').textContent = 'Confirm password';
                document.getElementById('baselinePassword').placeholder = 'Password';
            }
            document.getElementById('baselineModal').style.display = 'block';
        }
        
        function confirmBaseline() {
            const password = document.getElementById('baselinePassword').value;
            
            if (!password) {
                alert('Please enter a password');
                return;
            }
            
            if (!projectPassword) {
                projectPassword = password;
                saveBaseline();
                alert('Baseline has been set with new password');
            } else if (password === projectPassword) {
                saveBaseline();
                alert('Baseline has been updated');
            } else {
                alert('Incorrect password');
                return;
            }
            
            closeModal('baselineModal');
        }
        
        function saveBaseline() {
            projectBaseline = {};
            allTasks.forEach(task => {
                projectBaseline[task.id] = {
                    start: task.currentStart || task.start,
                    end: task.currentEnd || task.end,
                    name: task.name,
                    group: task.group
                };
            });
            saveConfiguration();
            generateChart();
        }
        
        // Password change
        function changePassword() {
            if (!projectPassword) {
                alert('No password set. Set baseline first.');
                return;
            }
            document.getElementById('passwordModal').style.display = 'block';
        }
        
        function confirmPasswordChange() {
            const oldPass = document.getElementById('oldPassword').value;
            const newPass = document.getElementById('newPassword').value;
            const confirmPass = document.getElementById('confirmPassword').value;
            
            if (oldPass !== projectPassword) {
                alert('Old password is incorrect');
                return;
            }
            
            if (!newPass) {
                alert('Please enter a new password');
                return;
            }
            
            if (newPass !== confirmPass) {
                alert('New passwords do not match');
                return;
            }
            
            projectPassword = newPass;
            saveConfiguration();
            alert('Password has been changed');
            closeModal('passwordModal');
        }
        
        // Export functions
        function exportToJSON() {
            const projectData = {
                version: '2.0',
                title: projectTitle,
                password: projectPassword,
                baseline: projectBaseline,
                tasks: allTasks,
                milestones: allMilestones,
                groups: availableGroups,
                changes: JSON.parse(localStorage.getItem('ganttChanges') || '{}')
            };
            
            const dataStr = JSON.stringify(projectData, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            
            const exportFileDefaultName = `${projectTitle.replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.json`;
            
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
        }
        
        function exportToExcel() {
            const wsData = [];
            
            wsData.push(['Task Name', 'Group', 'Current Start', 'Current End', 'Duration (days)', 
                        'Baseline Start', 'Baseline End', 'Delay (days)', 'Dependencies']);
            
            allTasks.forEach(task => {
                const currentStart = new Date(task.currentStart || task.start);
                const currentEnd = new Date(task.currentEnd || task.end);
                const duration = Math.round((currentEnd - currentStart) / (1000 * 60 * 60 * 24)) + 1;
                
                let baselineStart = '';
                let baselineEnd = '';
                let delay = '';
                
                if (projectBaseline && projectBaseline[task.id]) {
                    const baseline = projectBaseline[task.id];
                    baselineStart = baseline.start;
                    baselineEnd = baseline.end;
                    
                    const baselineStartDate = new Date(baseline.start);
                    const daysDiff = Math.floor((currentStart - baselineStartDate) / (1000 * 60 * 60 * 24));
                    delay = daysDiff || 0;
                }
                
                let dependencyText = '';
                if (task.dependency) {
                    const dependsOnTask = allTasks.find(t => t.id === task.dependency.taskId);
                    if (dependsOnTask) {
                        dependencyText = `After "${dependsOnTask.name}" + ${task.dependency.waitDays} days`;
                    }
                }
                
                const groupName = availableGroups[task.group] ? availableGroups[task.group].name : task.group;
                
                wsData.push([
                    task.name,
                    groupName,
                    formatDate(currentStart),
                    formatDate(currentEnd),
                    duration,
                    baselineStart ? formatDate(new Date(baselineStart)) : '',
                    baselineEnd ? formatDate(new Date(baselineEnd)) : '',
                    delay,
                    dependencyText
                ]);
            });
            
            // Add milestones sheet
            const mileData = [['Milestone Name', 'Date', 'Related Task', 'Group', 'Notes']];
            allMilestones.forEach(milestone => {
                const relatedTask = milestone.taskId ? allTasks.find(t => t.id === milestone.taskId) : null;
                const groupName = availableGroups[milestone.group] ? availableGroups[milestone.group].name : milestone.group;
                
                mileData.push([
                    milestone.name,
                    formatDate(new Date(milestone.date)),
                    relatedTask ? relatedTask.name : '',
                    groupName,
                    milestone.notes || ''
                ]);
            });
            
            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.aoa_to_sheet(wsData);
            const ws2 = XLSX.utils.aoa_to_sheet(mileData);
            
            XLSX.utils.book_append_sheet(wb, ws, 'Tasks');
            XLSX.utils.book_append_sheet(wb, ws2, 'Milestones');
            
            ws['!cols'] = [
                {wch: 50}, {wch: 20}, {wch: 12}, {wch: 12}, 
                {wch: 15}, {wch: 12}, {wch: 12}, {wch: 12}, {wch: 40}
            ];
            
            const fileName = `${projectTitle.replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.xlsx`;
            XLSX.writeFile(wb, fileName);
        }
        
        function exportToPDF() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });
            
            doc.setFontSize(20);
            doc.text(projectTitle, 14, 20);
            
            doc.setFontSize(10);
            doc.text(`Export date: ${new Date().toLocaleDateString()}`, 14, 28);
            
            const tableData = [];
            
            allTasks.forEach(task => {
                const currentStart = new Date(task.currentStart || task.start);
                const currentEnd = new Date(task.currentEnd || task.end);
                const duration = Math.round((currentEnd - currentStart) / (1000 * 60 * 60 * 24)) + 1;
                
                let delay = '';
                if (projectBaseline && projectBaseline[task.id]) {
                    const baseline = projectBaseline[task.id];
                    const baselineStartDate = new Date(baseline.start);
                    const daysDiff = Math.floor((currentStart - baselineStartDate) / (1000 * 60 * 60 * 24));
                    if (daysDiff > 0) delay = `+${daysDiff}d`;
                    else if (daysDiff < 0) delay = `${daysDiff}d`;
                }
                
                const groupName = availableGroups[task.group] ? availableGroups[task.group].name : task.group;
                
                tableData.push([
                    task.name.substring(0, 60),
                    groupName,
                    formatDate(currentStart),
                    formatDate(currentEnd),
                    duration.toString(),
                    delay
                ]);
            });
            
            doc.autoTable({
                head: [['Task Name', 'Group', 'Start', 'End', 'Days', 'Delay']],
                body: tableData,
                startY: 35,
                theme: 'striped',
                headStyles: {
                    fillColor: [37, 37, 38],
                    textColor: [244, 244, 240]
                },
                bodyStyles: {
                    fontSize: 8
                },
                columnStyles: {
                    0: { cellWidth: 100 },
                    1: { cellWidth: 40 },
                    2: { cellWidth: 25 },
                    3: { cellWidth: 25 },
                    4: { cellWidth: 20, halign: 'center' },
                    5: { cellWidth: 20, halign: 'center' }
                }
            });
            
            const fileName = `${projectTitle.replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.pdf`;
            doc.save(fileName);
        }
        
        function importProject() {
            document.getElementById('fileInput').click();
        }
        
        document.getElementById('fileInput').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);
                    
                    projectTitle = data.title || 'Imported Project';
                    projectPassword = data.password || null;
                    projectBaseline = data.baseline || null;
                    allTasks = data.tasks || [];
                    allMilestones = data.milestones || [];
                    
                    taskIdCounter = Math.max(...allTasks.map(t => t.id || 0)) + 1;
                    milestoneIdCounter = Math.max(...allMilestones.map(m => m.id || 0)) + 1;
                    
                    if (data.groups) {
                        availableGroups = data.groups;
                    }
                    
                    if (data.changes) {
                        localStorage.setItem('ganttChanges', JSON.stringify(data.changes));
                    }
                    
                    document.getElementById('projectTitle').value = projectTitle;
                    saveConfiguration();
                    saveCustomGroups();
                    saveTasks();
                    saveMilestones();
                    updateLegend();
                    updateGroupStyles();
                    updateNewTaskGroupOptions();
                    updateMonthRange();
                    
                    alert('Project imported successfully');
                } catch (err) {
                    alert('Import error: ' + err.message);
                }
            };
            reader.readAsText(file);
            
            this.value = '';
        });
        
        function newProject() {
            if (!confirm('Are you sure you want to create a new project? All unsaved data will be lost.')) {
                return;
            }
            
            localStorage.removeItem('ganttConfig');
            localStorage.removeItem('ganttChanges');
            localStorage.removeItem('customGroups');
            localStorage.removeItem('ganttTasks');
            localStorage.removeItem('ganttMilestones');
            
            projectTitle = 'New Project';
            projectPassword = null;
            projectBaseline = null;
            allTasks = [];
            allMilestones = [];
            taskIdCounter = 0;
            milestoneIdCounter = 0;
            
            availableGroups = {};
            
            saveCustomGroups();
            
            document.getElementById('projectTitle').value = projectTitle;
            updateLegend();
            updateGroupStyles();
            updateNewTaskGroupOptions();
            updateMonthRange();
            
            alert('New project created. Add groups from templates to start.');
        }
        
        // Drag and resize
        let draggedElement = null;
        let resizingElement = null;
        let startX = 0;
        let startLeft = 0;
        let startWidth = 0;
        let dragMode = '';
        
        function startDrag(e, bar, mode) {
            e.preventDefault();
            e.stopPropagation();
            
            if (mode === 'move') {
                draggedElement = bar;
                dragMode = 'move';
                bar.classList.add('dragging');
            } else {
                resizingElement = bar;
                dragMode = mode;
            }
            
            startX = e.clientX;
            startLeft = parseFloat(bar.style.left);
            startWidth = parseFloat(bar.style.width);
            
            document.addEventListener('mousemove', handleDrag);
            document.addEventListener('mouseup', stopDrag);
        }
        
        function handleDrag(e) {
            const deltaX = e.clientX - startX;
            const timelineWidth = e.target.closest('.timeline-cell')?.offsetWidth || 1000;
            const deltaPercent = (deltaX / timelineWidth) * 100;
            
            if (dragMode === 'move' && draggedElement) {
                const newLeft = Math.max(0, Math.min(startLeft + deltaPercent, 100 - startWidth));
                draggedElement.style.left = `${newLeft}%`;
            } else if (dragMode === 'resize-left' && resizingElement) {
                const newLeft = Math.max(0, startLeft + deltaPercent);
                const newWidth = startWidth - deltaPercent;
                const minWidthPercent = (1 / getVisibleDays()) * 100;
                if (newWidth > minWidthPercent) {
                    resizingElement.style.left = `${newLeft}%`;
                    resizingElement.style.width = `${newWidth}%`;
                }
            } else if (dragMode === 'resize-right' && resizingElement) {
                const minWidthPercent = (1 / getVisibleDays()) * 100;
                const newWidth = Math.max(minWidthPercent, startWidth + deltaPercent);
                if (startLeft + newWidth <= 100) {
                    resizingElement.style.width = `${newWidth}%`;
                }
            }
        }
        
        function stopDrag() {
            if (draggedElement) {
                draggedElement.classList.remove('dragging');
                updateTaskDates(draggedElement);
                draggedElement = null;
            }
            if (resizingElement) {
                updateTaskDates(resizingElement);
                resizingElement = null;
            }
            
            document.removeEventListener('mousemove', handleDrag);
            document.removeEventListener('mouseup', stopDrag);
        }
        
        function updateTaskDates(bar) {
            const taskId = parseInt(bar.dataset.taskId);
            const task = allTasks.find(t => t.id === taskId);
            if (!task) return;
            
            const leftPercent = parseFloat(bar.style.left);
            const widthPercent = parseFloat(bar.style.width);
            
            const visibleDays = getVisibleDays();
            const { start: visibleStart } = getVisibleDateRange();
            
            const startDays = Math.round((leftPercent / 100) * visibleDays);
            const durationDays = Math.max(1, Math.round((widthPercent / 100) * visibleDays));
            
            const newStart = new Date(visibleStart);
            newStart.setDate(newStart.getDate() + startDays);
            
            const newEnd = new Date(newStart);
            newEnd.setDate(newEnd.getDate() + durationDays - 1);
            
            task.currentStart = newStart.toISOString().split('T')[0];
            task.currentEnd = newEnd.toISOString().split('T')[0];
            
            // Update displayed dates
            const taskRow = bar.closest('.chart-row');
            const taskDates = taskRow.querySelector('.task-dates');
            taskDates.textContent = formatDateRange(newStart, newEnd);
            
            const daysInput = taskRow.querySelector('.days-input');
            if (daysInput) {
                daysInput.value = durationDays;
            }
            
            bar.title = `${task.name} (${formatMonthDay(newStart)} - ${formatMonthDay(newEnd)})`;
            
            // Update dependent tasks
            updateDependentTasks(task.id);
            
            saveChanges();
            
            // Redraw dependency lines
            if (showDependencies) {
                setTimeout(() => {
                    drawDependencyLines();
                }, 50);
            }
        }
        
        function updateDependentTasks(taskId) {
            const task = allTasks.find(t => t.id === taskId);
            if (!task) return;
            
            const taskEnd = new Date(task.currentEnd || task.end);
            
            // Find all tasks that depend on this task
            const dependentTasks = allTasks.filter(depTask => 
                depTask.dependency && depTask.dependency.taskId === taskId
            );
            
            dependentTasks.forEach(depTask => {
                const newStart = new Date(taskEnd);
                newStart.setDate(newStart.getDate() + depTask.dependency.waitDays + 1);
                
                const currentStart = new Date(depTask.currentStart || depTask.start);
                const currentEnd = new Date(depTask.currentEnd || depTask.end);
                const duration = Math.round((currentEnd - currentStart) / (1000 * 60 * 60 * 24)) + 1;
                
                const newEnd = new Date(newStart);
                newEnd.setDate(newEnd.getDate() + duration - 1);
                
                depTask.currentStart = newStart.toISOString().split('T')[0];
                depTask.currentEnd = newEnd.toISOString().split('T')[0];
                
                // Update the bar position if it exists
                const depBar = document.querySelector(`.gantt-bar[data-task-id="${depTask.id}"]`);
                if (depBar) {
                    const visibleDays = getVisibleDays();
                    const { start: visibleStart } = getVisibleDateRange();
                    
                    const daysSinceStart = Math.max(0, Math.floor((newStart - visibleStart) / (1000 * 60 * 60 * 24)));
                    depBar.style.left = `${(daysSinceStart / visibleDays) * 100}%`;
                    
                    // Update displayed dates
                    const taskRow = depBar.closest('.chart-row');
                    if (taskRow) {
                        const taskDates = taskRow.querySelector('.task-dates');
                        if (taskDates) {
                            taskDates.textContent = formatDateRange(newStart, newEnd);
                        }
                    }
                }
                
                // Recursively update tasks dependent on this one
                updateDependentTasks(depTask.id);
            });
        }
        
        function updateTaskDuration(task, bar, newDuration) {
            if (!bar) {
                const allBars = document.querySelectorAll('.gantt-bar');
                bar = Array.from(allBars).find(b => parseInt(b.dataset.taskId) === task.id);
            }
            if (!bar) return;
            
            const currentStart = new Date(task.currentStart || task.start);
            const newEnd = new Date(currentStart);
            newEnd.setDate(newEnd.getDate() + newDuration - 1);
            
            task.currentEnd = newEnd.toISOString().split('T')[0];
            
            const visibleDays = getVisibleDays();
            const widthPercent = Math.max(0.5, (newDuration / visibleDays) * 100);
            bar.style.width = `${widthPercent}%`;
            
            const taskRow = bar.closest('.chart-row');
            const taskDates = taskRow.querySelector('.task-dates');
            taskDates.textContent = formatDateRange(currentStart, newEnd);
            
            bar.title = `${task.name} (${formatMonthDay(currentStart)} - ${formatMonthDay(newEnd)})`;
            
            // Update dependent tasks
            updateDependentTasks(task.id);
            
            saveChanges();
            
            // Redraw dependency lines
            if (showDependencies) {
                setTimeout(() => {
                    drawDependencyLines();
                }, 50);
            }
        }
        
        // Draw dependency lines
        function drawDependencyLines() {
            // Remove existing SVG
            const existingSvg = document.querySelector('.dependency-lines-container');
            if (existingSvg) {
                existingSvg.remove();
            }
            
            if (!showDependencies) return;
            
            const chartContainer = document.getElementById('chartContainer');
            if (!chartContainer) return;
            
            // Create SVG container
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('class', 'dependency-lines-container');
            svg.style.left = '1630px';
            svg.style.width = 'calc(100% - 1630px)';
            
            // Define arrow marker
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
            marker.setAttribute('id', 'arrow');
            marker.setAttribute('markerWidth', '6');
            marker.setAttribute('markerHeight', '6');
            marker.setAttribute('refX', '9');
            marker.setAttribute('refY', '3');
            marker.setAttribute('orient', 'auto');
            marker.setAttribute('markerUnits', 'strokeWidth');
            
            const arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            arrowPath.setAttribute('d', 'M0,0 L0,6 L6,3 Z');
            arrowPath.setAttribute('fill', '#888');
            marker.setAttribute('markerOpacity', '0.5');
            arrowPath.setAttribute('class', 'dependency-arrow');
            
            marker.appendChild(arrowPath);
            defs.appendChild(marker);
            svg.appendChild(defs);
            
            // Draw lines for each dependency
            allTasks.forEach(task => {
                if (task.dependency) {
                    const fromTask = allTasks.find(t => t.id === task.dependency.taskId);
                    if (!fromTask) return;
                    
                    const fromBar = document.querySelector(`.gantt-bar[data-task-id="${fromTask.id}"]`);
                    const toBar = document.querySelector(`.gantt-bar[data-task-id="${task.id}"]`);
                    
                    if (!fromBar || !toBar) return;
                    
                    const fromRow = fromBar.closest('.chart-row');
                    const toRow = toBar.closest('.chart-row');
                    
                    // Get row indices
                    const allRows = Array.from(document.querySelectorAll('.chart-row'));
                    const fromRowIndex = allRows.indexOf(fromRow);
                    const toRowIndex = allRows.indexOf(toRow);
                    
                    // Get timeline cell width
                    const timelineCell = fromBar.parentElement;
                    const timelineWidth = timelineCell.offsetWidth;
                    
                    // Calculate positions based on bar percentages
                    const fromBarLeft = parseFloat(fromBar.style.left);
                    const fromBarWidth = parseFloat(fromBar.style.width);
                    const toBarLeft = parseFloat(toBar.style.left);
                    
                    // Convert percentages to pixels
                    const fromX = (timelineWidth * (fromBarLeft + fromBarWidth) / 100);
                    const fromY = (fromRowIndex * 21) + 10.5; // 21px row height
                    const toX = (timelineWidth * toBarLeft / 100);
                    const toY = (toRowIndex * 21) + 10.5;
                    
                    // One day in pixels
                    const visibleDays = getVisibleDays();
                    const oneDayPixels = timelineWidth / visibleDays;
                    
                    // Draw path
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    
                    // Create path: horizontal right, vertical, horizontal to target
                    const midX = fromX + oneDayPixels;
                    const d = `M ${fromX} ${fromY} L ${midX} ${fromY} L ${midX} ${toY} L ${toX - 5} ${toY}`;
                    
                    path.setAttribute('d', d);
                    path.setAttribute('class', 'dependency-line');
                    path.setAttribute('marker-end', 'url(#arrow)');
                    
                    svg.appendChild(path);
                }
            });
            
            chartContainer.appendChild(svg);
        }
        
        // Generate chart
        function generateChart() {
            const container = document.getElementById('chartContainer');
            container.innerHTML = '';
            
            const { start: visibleStart, end: visibleEnd } = getVisibleDateRange();
            const visibleDays = getVisibleDays();
            
            // Sort tasks based on mode
            let sortedTasks = [...allTasks];
            if (sortMode === 'date') {
                sortedTasks.sort((a, b) => {
                    const aDate = new Date(a.currentStart || a.start);
                    const bDate = new Date(b.currentStart || b.start);
                    return aDate - bDate;
                });
            }
            
            // Filter tasks in visible range
            const visibleTasks = sortedTasks.filter(task => {
                const taskStart = new Date(task.currentStart || task.start);
                const taskEnd = new Date(task.currentEnd || task.end);
                return taskEnd >= visibleStart && taskStart <= visibleEnd;
            });
            
            let needsSave = false;
            
            visibleTasks.forEach((task, rowIndex) => {
                const row = document.createElement('div');
                row.className = 'chart-row';
                const rowNumberCell = document.createElement('div');
                rowNumberCell.className = 'row-number-cell';
                rowNumberCell.textContent = (rowIndex + 1);
                row.appendChild(rowNumberCell);

                
                const taskCell = document.createElement('div');
                taskCell.className = 'task-cell';
                
                const taskName = document.createElement('div');
                // Ensure group exists, fallback to first available group
                const taskGroup = availableGroups[task.group] ? task.group : Object.keys(availableGroups)[0];
                if (taskGroup !== task.group) {
                    task.group = taskGroup;
                    needsSave = true;
                }
                taskName.className = `task-name ${taskGroup}`;
                taskName.textContent = task.name;
                taskName.title = task.name;
                taskName.contentEditable = false;
                
                taskName.addEventListener('dblclick', function() {
                    this.contentEditable = true;
                    this.classList.add('editing');
                    this.focus();
                    
                    const range = document.createRange();
                    range.selectNodeContents(this);
                    const sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                });
                
                taskName.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        this.blur();
                    } else if (e.key === 'Escape') {
                        this.textContent = task.name;
                        this.blur();
                    }
                });
                
                taskName.addEventListener('blur', function() {
                    this.contentEditable = false;
                    this.classList.remove('editing');
                    let newName = this.textContent.trim();
                    if (newName && newName !== task.name) {
                        newName = newName.substring(0, 50);
                        task.name = newName;
                        this.textContent = newName;
                        this.title = newName;
                        const bar = this.closest('.chart-row').querySelector('.gantt-bar');
                        if (bar) {
                            const textNode = Array.from(bar.childNodes).find(node => node.nodeType === 3);
                            if (textNode) {
                                textNode.textContent = newName;
                            }
                            bar.title = `${newName} (${formatMonthDay(new Date(task.currentStart || task.start))} - ${formatMonthDay(new Date(task.currentEnd || task.end))})`;
                        }
                        saveChanges();
                    } else {
                        this.textContent = task.name;
                    }
                });
                
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-task-btn';
                deleteBtn.innerHTML = '×';
                deleteBtn.title = 'Delete task';
                deleteBtn.onclick = () => deleteTask(task.id);
                
                taskCell.appendChild(taskName);
                
                // Container for dependency info
                const depContainer = document.createElement('div');
                depContainer.style.display = 'flex';
                depContainer.style.gap = '10px';
                depContainer.style.marginLeft = 'auto';
                depContainer.style.marginRight = '10px';
                
                // Add dependency info if exists
                if (showDependencies) {
                    // Show what this task depends on
                    if (task.dependency) {
                        const dependsOnTask = allTasks.find(t => t.id === task.dependency.taskId);
                        if (dependsOnTask) {
                            const depInfo = document.createElement('div');
                            depInfo.className = 'dependency-info';
                            depInfo.textContent = `← ${task.dependency.waitDays}d`;
                            depInfo.title = `Depends on: ${dependsOnTask.name} + ${task.dependency.waitDays} days`;
                            depContainer.appendChild(depInfo);
                        }
                    }
                    
                    // Show what this task triggers
                    const triggeredTask = allTasks.find(t => 
                        t.dependency && t.dependency.taskId === task.id
                    );
                    if (triggeredTask) {
                        const triggerInfo = document.createElement('div');
                        triggerInfo.className = 'dependency-info';
                        triggerInfo.style.color = '#5a8e5e';
                        triggerInfo.textContent = `→ triggers`;
                        triggerInfo.title = `Triggers: ${triggeredTask.name} after ${triggeredTask.dependency.waitDays} days`;
                        depContainer.appendChild(triggerInfo);
                    }
                    
                    if (depContainer.children.length > 0) {
                        taskCell.appendChild(depContainer);
                    }
                }
                
                taskCell.appendChild(deleteBtn);
                row.appendChild(taskCell);
                
                // Current dates cell
                const currentCell = document.createElement('div');
                currentCell.className = 'current-cell';
                const currentDates = document.createElement('div');
                currentDates.className = 'task-dates';
                const startDate = new Date(task.currentStart || task.start);
                const endDate = new Date(task.currentEnd || task.end);
                currentDates.textContent = formatDateRange(startDate, endDate);
                currentCell.appendChild(currentDates);
                row.appendChild(currentCell);
                
                // Baseline dates cell
                const baselineCell = document.createElement('div');
                baselineCell.className = 'baseline-cell';
                
                if (projectBaseline && projectBaseline[task.id]) {
                    const baseline = projectBaseline[task.id];
                    const baselineStart = new Date(baseline.start);
                    const baselineEnd = new Date(baseline.end);
                    
                    const currentStartTime = startDate.getTime();
                    const baselineStartTime = baselineStart.getTime();
                    const daysDiff = Math.floor((currentStartTime - baselineStartTime) / (1000 * 60 * 60 * 24));
                    
                    if (daysDiff === 0 && currentDates.textContent === formatDateRange(baselineStart, baselineEnd)) {
                        const check = document.createElement('div');
                        check.className = 'baseline-check';
                        check.innerHTML = '✓';
                        check.title = 'No change from baseline';
                        baselineCell.appendChild(check);
                    } else {
                        const baselineDates = document.createElement('div');
                        baselineDates.className = 'baseline-dates';
                        
                        if (daysDiff > 0) {
                            baselineDates.classList.add('changed');
                            baselineDates.title = `${daysDiff} days late`;
                        } else if (daysDiff < 0) {
                            baselineDates.classList.add('early');
                            baselineDates.title = `${Math.abs(daysDiff)} days early`;
                        }
                        
                        baselineDates.textContent = formatDateRange(baselineStart, baselineEnd);
                        baselineCell.appendChild(baselineDates);
                    }
                }
                row.appendChild(baselineCell);
                
                // Days cell
                const daysCell = document.createElement('div');
                daysCell.className = 'days-cell';
                
                const daysInput = document.createElement('input');
                daysInput.type = 'number';
                daysInput.className = 'days-input';
                daysInput.min = '1';
                daysInput.max = '365';
                daysInput.step = '1';
                
                const currentDuration = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
                daysInput.value = currentDuration;
                
                daysInput.dataset.taskId = task.id;
                
                daysCell.appendChild(daysInput);
                row.appendChild(daysCell);
                
                const timelineCell = document.createElement('div');
                timelineCell.className = 'timeline-cell';
                timelineCell.style.position = 'relative';
                timelineCell.style.flex = '1';
                
                // Add weekend stripes
                let currentDate = new Date(visibleStart);
                for (let i = 0; i < visibleDays; i++) {
                    const dayOfWeek = currentDate.getDay();
                    if (dayOfWeek === 0 || dayOfWeek === 6) {
                        const stripe = document.createElement('div');
                        stripe.className = 'weekend-stripe';
                        stripe.style.left = `${(i / visibleDays) * 100}%`;
                        stripe.style.width = `${(1 / visibleDays) * 100}%`;
                        timelineCell.appendChild(stripe);
                    }
                    currentDate.setDate(currentDate.getDate() + 1);
                }
                
                // Add holiday stripes
                holidays.forEach(holiday => {
                    const holidayDate = new Date(holiday.date);
                    const daysSinceStart = Math.floor((holidayDate - visibleStart) / (1000 * 60 * 60 * 24));
                    if (daysSinceStart >= 0 && daysSinceStart < visibleDays) {
                        const stripe = document.createElement('div');
                        stripe.className = 'holiday-stripe';
                        stripe.style.left = `${(daysSinceStart / visibleDays) * 100}%`;
                        stripe.style.width = `${(1 / visibleDays) * 100}%`;
                        stripe.title = holiday.name;
                        timelineCell.appendChild(stripe);
                    }
                });
                
                // Add today line
                const today = new Date();
                if (today >= visibleStart && today <= visibleEnd) {
                    const daysSinceStart = Math.floor((today - visibleStart) / (1000 * 60 * 60 * 24));
                    const todayLine = document.createElement('div');
                    todayLine.style.position = 'absolute';
                    todayLine.style.left = `${(daysSinceStart / visibleDays) * 100}%`;
                    todayLine.style.top = '0';
                    todayLine.style.bottom = '0';
                    todayLine.style.width = '2px';
                    todayLine.style.background = '#579bfc';
                    todayLine.style.zIndex = '4';
                    todayLine.style.pointerEvents = 'none';
                    todayLine.title = `Today: ${formatDate(today)}`;
                    timelineCell.appendChild(todayLine);
                }
                
                // Add month divider lines
                const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                let cumulativeDays = 0;
                for (let i = startMonthOffset; i < startMonthOffset + monthsToShow - 1 && i < 11; i++) {
                    cumulativeDays += monthDays[i];
                    const line = document.createElement('div');
                    line.style.position = 'absolute';
                    line.style.left = `${(cumulativeDays / visibleDays) * 100}%`;
                    line.style.top = '0';
                    line.style.bottom = '0';
                    line.style.width = '1px';
                    line.style.background = '#3e3e42';
                    line.style.pointerEvents = 'none';
                    timelineCell.appendChild(line);
                }
                
                // Create baseline bar if exists
                if (projectBaseline && projectBaseline[task.id]) {
                    const baseline = projectBaseline[task.id];
                    const baselineStart = new Date(baseline.start);
                    const baselineEnd = new Date(baseline.end);
                    
                    if (baselineEnd >= visibleStart && baselineStart <= visibleEnd) {
                        const baselineDaysSinceStart = Math.max(0, Math.floor((baselineStart - visibleStart) / (1000 * 60 * 60 * 24)));
                        const baselineDuration = Math.floor((baselineEnd - baselineStart) / (1000 * 60 * 60 * 24)) + 1;
                        
                        const baselineBar = document.createElement('div');
                        const baselineGroup = baseline.group && availableGroups[baseline.group] ? baseline.group : task.group;
                        baselineBar.className = `gantt-baseline ${baselineGroup}`;
                        baselineBar.style.left = `${(baselineDaysSinceStart / visibleDays) * 100}%`;
                        baselineBar.style.width = `${(baselineDuration / visibleDays) * 100}%`;
                        
                        timelineCell.appendChild(baselineBar);
                    }
                }
                
                // Calculate position for current bar
                const daysSinceStart = Math.max(0, Math.floor((startDate - visibleStart) / (1000 * 60 * 60 * 24)));
                const duration = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
                
                // Create gantt bar
                const bar = document.createElement('div');
                bar.className = `gantt-bar ${taskGroup}`;
                bar.style.left = `${(daysSinceStart / visibleDays) * 100}%`;
                bar.style.width = `${(duration / visibleDays) * 100}%`;
                bar.title = `${task.name} (${formatMonthDay(startDate)} - ${formatMonthDay(endDate)})`;
                bar.dataset.taskId = task.id;
                
                const textNode = document.createTextNode(task.name);
                bar.appendChild(textNode);
                
                const leftHandle = document.createElement('div');
                leftHandle.className = 'resize-handle resize-handle-left';
                leftHandle.addEventListener('mousedown', (e) => startDrag(e, bar, 'resize-left'));
                
                const rightHandle = document.createElement('div');
                rightHandle.className = 'resize-handle resize-handle-right';
                rightHandle.addEventListener('mousedown', (e) => startDrag(e, bar, 'resize-right'));
                
                leftHandle.addEventListener('selectstart', (e) => e.preventDefault());
                rightHandle.addEventListener('selectstart', (e) => e.preventDefault());
                
                bar.appendChild(leftHandle);
                bar.appendChild(rightHandle);
                
                bar.addEventListener('mousedown', (e) => {
                    if (!e.target.classList.contains('resize-handle')) {
                        startDrag(e, bar, 'move');
                    }
                });
                
                bar.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    showContextMenu(e, task, bar);
                });
                
                bar.addEventListener('selectstart', (e) => e.preventDefault());
                
                const existingDaysInput = row.querySelector('.days-input');
                if (existingDaysInput) {
                    existingDaysInput.addEventListener('input', function() {
                        const newDuration = parseInt(this.value) || 1;
                        updateTaskDuration(task, bar, newDuration);
                    });
                    
                    existingDaysInput.addEventListener('keydown', function(e) {
                        if (e.key === 'Enter') {
                            this.blur();
                        }
                    });
                }
                
                timelineCell.appendChild(bar);
                
                // Add milestones for this task
                const taskMilestones = allMilestones.filter(m => m.taskId === task.id);
                taskMilestones.forEach(milestone => {
                    const milestoneDate = new Date(milestone.date);
                    if (milestoneDate >= visibleStart && milestoneDate <= visibleEnd) {
                        const milestoneDays = Math.floor((milestoneDate - visibleStart) / (1000 * 60 * 60 * 24));
                        
                        const diamond = document.createElement('div');
                        diamond.className = 'milestone';
                        diamond.style.left = `${(milestoneDays / visibleDays) * 100}%`;
                        diamond.style.top = '1px';
                        // Pokazujemy nazwę, datę i notatki w tooltip
                        const milestoneTooltip = `${milestone.name}\nDate: ${formatDate(milestoneDate)}${milestone.notes ? '\nNotes: ' + milestone.notes : ''}`;
                        diamond.title = milestoneTooltip;
                        
                        // Add dragging functionality to milestone
                        diamond.addEventListener('mousedown', (e) => handleMilestoneDrag(e, diamond, milestone.id));
                        
                        // Add context menu for milestone
                        diamond.addEventListener('contextmenu', (e) => {
                            e.preventDefault();
                            showMilestoneContextMenu(e, milestone);
                        });
                        
                        timelineCell.appendChild(diamond);
                    }
                });
                
                row.appendChild(timelineCell);
                container.appendChild(row);
            });
            
            // Add task row
            const addRow = document.createElement('div');
            addRow.className = 'add-task-row';
            
            const addNumberCell = document.createElement('div');
            addNumberCell.className = 'row-number-cell';
            addNumberCell.style.background = '#252526';
            addRow.appendChild(addNumberCell);
            
            const addCell = document.createElement('div');
            addCell.className = 'add-task-cell';
            addCell.style.width = '540px';
            addCell.style.left = '30px';
            
            const addBtn = document.createElement('button');
            addBtn.className = 'add-task-btn';
            addBtn.textContent = '+ Add task';
            addBtn.onclick = showAddTaskModal;
            
            addCell.appendChild(addBtn);
            addRow.appendChild(addCell);
            
            const emptyCell = document.createElement('div');
            emptyCell.style.flex = '1';
            addRow.appendChild(emptyCell);
            
            container.appendChild(addRow);
            
            if (needsSave) {
                saveChanges();
            }
            
            // Draw dependency lines after all elements are rendered
            setTimeout(() => {
                drawDependencyLines();
            }, 100);
        }
        
        function formatDate(date) {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return `${date.getDate()} ${months[date.getMonth()]}`;
        }
        
        function formatMonthDay(date) {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return `${months[date.getMonth()]} ${date.getDate()}`;
        }
        
        function showContextMenu(e, task, bar) {
            const menu = document.getElementById('contextMenu');
            menu.innerHTML = '<div class="context-menu-item header">Task Options</div>';
            
            // Add Set Dependency option
            const dependencyItem = document.createElement('div');
            dependencyItem.className = 'context-menu-item';
            dependencyItem.innerHTML = `⇄ Set dependencies`;
            dependencyItem.onclick = () => showSetDependencyModal(task);
            menu.appendChild(dependencyItem);
            
            // Add separator
            const separator1 = document.createElement('div');
            separator1.className = 'context-menu-separator';
            menu.appendChild(separator1);
            
            // Add Change Group header
            const groupHeader = document.createElement('div');
            groupHeader.className = 'context-menu-item header';
            groupHeader.textContent = 'Change Group';
            menu.appendChild(groupHeader);
            
            if (Object.keys(availableGroups).length === 0) {
                const item = document.createElement('div');
                item.className = 'context-menu-item';
                item.innerHTML = `<span style="color: #666;">No groups available</span>`;
                menu.appendChild(item);
            } else {
                Object.entries(availableGroups).forEach(([key, value]) => {
                    const item = document.createElement('div');
                    item.className = 'context-menu-item';
                    if (task.group === key) {
                        item.style.background = '#3e3e42';
                    }
                    item.innerHTML = `
                        <span class="group-color-dot" style="background: ${value.color}"></span>
                        <span>${value.name}</span>
                    `;
                    item.onclick = () => changeTaskGroup(task, bar, key);
                    menu.appendChild(item);
                });
            }
            
            const separator2 = document.createElement('div');
            separator2.className = 'context-menu-separator';
            menu.appendChild(separator2);
            
            const deleteItem = document.createElement('div');
            deleteItem.className = 'context-menu-item danger';
            deleteItem.innerHTML = `Delete task`;
            deleteItem.onclick = () => {
                deleteTask(task.id);
                hideContextMenu();
            };
            menu.appendChild(deleteItem);
            
            menu.style.display = 'block';
            menu.style.left = e.pageX + 'px';
            menu.style.top = e.pageY + 'px';
            
            currentTaskForMenu = task;
            currentBarForMenu = bar;
        }
        
        function hideContextMenu() {
            document.getElementById('contextMenu').style.display = 'none';
        }
        
        function changeTaskGroup(task, bar, newGroup) {
            if (!availableGroups[newGroup]) {
                alert('This group no longer exists');
                hideContextMenu();
                return;
            }
            
            task.group = newGroup;
            
            bar.className = `gantt-bar ${newGroup}`;
            
            const baseline = bar.parentElement.querySelector('.gantt-baseline');
            if (baseline) {
                baseline.className = `gantt-baseline ${newGroup}`;
            }
            
            saveChanges();
            hideContextMenu();
        }
        
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.context-menu') && !e.target.closest('.gantt-bar')) {
                hideContextMenu();
            }
            if (!e.target.closest('#milestoneContextMenu') && !e.target.closest('.milestone')) {
                hideMilestoneContextMenu();
            }
        });
        
        // Generate months header
        function generateMonthsHeader() {
            const monthsRow = document.getElementById('monthsRow');
            monthsRow.innerHTML = '';
            
            const allMonths = [
                'January 2025', 'February 2025', 'March 2025', 'April 2025',
                'May 2025', 'June 2025', 'July 2025', 'August 2025',
                'September 2025', 'October 2025', 'November 2025', 'December 2025'
            ];
            const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            
            const visibleDays = getVisibleDays();
            const timelineHeader = document.querySelector('.timeline-header');
            
            timelineHeader.querySelectorAll('.month-divider').forEach(el => el.remove());
            
            let cumulativeDays = 0;
            for (let i = startMonthOffset; i < startMonthOffset + monthsToShow && i < 12; i++) {
                const cell = document.createElement('div');
                cell.className = 'month-cell';
                cell.textContent = allMonths[i];
                cell.style.width = `${(monthDays[i] / visibleDays) * 100}%`;
                monthsRow.appendChild(cell);
                
                if (i < startMonthOffset + monthsToShow - 1 && i < 11) {
                    cumulativeDays += monthDays[i];
                    const line = document.createElement('div');
                    line.className = 'month-divider';
                    line.style.position = 'absolute';
                    line.style.left = `${(cumulativeDays / visibleDays) * 100}%`;
                    line.style.top = '0';
                    line.style.bottom = '0';
                    line.style.width = '1px';
                    line.style.background = '#3e3e42';
                    line.style.zIndex = '5';
                    line.style.pointerEvents = 'none';
                    timelineHeader.appendChild(line);
                }
            }
        }
        
        // Milestone context menu functions
        function showMilestoneContextMenu(e, milestone) {
            const menu = document.getElementById('milestoneContextMenu');
            menu.style.display = 'block';
            menu.style.left = e.pageX + 'px';
            menu.style.top = e.pageY + 'px';
            
            currentMilestoneForMenu = milestone;
            e.stopPropagation();
        }
        
        function editMilestone() {
            if (!currentMilestoneForMenu) {
                alert('No milestone selected!');
                return;
            }
            
            // Make sure we have the current milestone data
            const milestone = allMilestones.find(m => m.id === currentMilestoneForMenu.id);
            if (!milestone) {
                alert('Milestone not found');
                return;
            }
            
            document.getElementById('editMilestoneName').value = milestone.name;
            document.getElementById('editMilestoneDate').value = milestone.date;
            document.getElementById('editMilestoneNotes').value = milestone.notes || '';
            
            document.getElementById('editMilestoneModal').style.display = 'block';
            document.getElementById('milestoneContextMenu').style.display = 'none';
        }
        
        function confirmEditMilestone() {
            if (!currentMilestoneForMenu) {
                alert('No milestone selected');
                return;
            }
            
            const name = document.getElementById('editMilestoneName').value.trim();
            const date = document.getElementById('editMilestoneDate').value;
            const notes = document.getElementById('editMilestoneNotes').value.trim();
            
            if (!name || !date) {
                alert('Please fill name and date');
                return;
            }
            
            // Find the milestone in the array to ensure we're editing the right object
            const milestoneIndex = allMilestones.findIndex(m => m.id === currentMilestoneForMenu.id);
            if (milestoneIndex !== -1) {
                allMilestones[milestoneIndex].name = name.substring(0, 50);
                allMilestones[milestoneIndex].date = date;
                allMilestones[milestoneIndex].notes = notes;
                
                saveMilestones();
                generateChart();
                closeModal('editMilestoneModal');
                alert('Milestone updated successfully!');
            } else {
                alert('Error: Milestone not found');
                return;
            }
        }
        
        function deleteMilestone() {
            if (!currentMilestoneForMenu) return;
            
            allMilestones = allMilestones.filter(m => m.id !== currentMilestoneForMenu.id);
            saveMilestones();
            generateChart();
            
            hideMilestoneContextMenu();
        }
        
        function hideMilestoneContextMenu() {
            document.getElementById('milestoneContextMenu').style.display = 'none';
        }
        
        // Initialize
        window.toggleInstructions = function() {
            const panel = document.getElementById('instructions-panel');
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        };
        
        loadConfiguration();
        loadCustomGroups();
        loadTasks();
        loadMilestones();
        loadSavedChanges();
        updateMonthRange();
        
        // Add scroll listener to redraw dependency lines
        const chartWrapper = document.querySelector('.chart-wrapper');
        let scrollTimeout;
        if (chartWrapper) {
            chartWrapper.addEventListener('scroll', () => {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    if (showDependencies) {
                        drawDependencyLines();
                    }
                }, 100);
            });
        }
        
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
            }
        };
        
        // Add resize listener
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (showDependencies) {
                    drawDependencyLines();
                }
            }, 100);
        });
        
        // Export handlers - TYLKO JEDNA WERSJA
        document.addEventListener('DOMContentLoaded', function() {
            // CSV Export
            const csvBtn = document.getElementById('exportCsvBtn');
            if (csvBtn) {
                csvBtn.addEventListener('click', function() {
                    const rows = [];
                    rows.push(['Task ID', 'Task Name', 'Group', 'Start Date', 'End Date', 'Duration (days)', 'Dependencies'].join(','));
                    
                    allTasks.forEach(task => {
                        const start = new Date(task.currentStart || task.start);
                        const end = new Date(task.currentEnd || task.end);
                        const duration = Math.round((end - start) / (1000 * 60 * 60 * 24)) + 1;
                        const groupName = availableGroups[task.group] ? availableGroups[task.group].name : task.group;
                        
                        let depText = '';
                        if (task.dependency) {
                            const depTask = allTasks.find(t => t.id === task.dependency.taskId);
                            if (depTask) {
                                depText = `After "${depTask.name}" + ${task.dependency.waitDays} days`;
                            }
                        }
                        
                        rows.push([
                            task.id,
                            `"${task.name.replace(/"/g, '""')}"`,
                            `"${groupName}"`,
                            task.currentStart || task.start,
                            task.currentEnd || task.end,
                            duration,
                            `"${depText}"`
                        ].join(','));
                    });
                    
                    const csvContent = rows.join('\n');
                    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${projectTitle.replace(/\s+/g, '-')}-tasks.csv`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                });
            }
            
            // Excel Export - używa istniejącej funkcji exportToExcel()
            const excelBtn = document.getElementById('exportExcelBtn');
            if (excelBtn) {
                excelBtn.addEventListener('click', exportToExcel);
            }
            
            // PDF Export
            const pdfBtn = document.getElementById('exportPdfBtn');
            if (pdfBtn) {
                pdfBtn.addEventListener('click', async function() {
                    const mode = document.getElementById('pdfExportMode').value;
                    const chart = document.querySelector('.chart-container');
                    
                    // Dodaj klasę dla stylu druku
                    chart.classList.add('export-print');
                    
                    try {
                        const canvas = await html2canvas(chart, { 
                            scale: 2, 
                            backgroundColor: '#ffffff',
                            logging: false 
                        });
                        
                        const imgData = canvas.toDataURL('image/png');
                        const { jsPDF } = window.jspdf;
                        const title = document.getElementById('projectTitle').value || 'chart';
                        
                        if (mode === 'single') {
                            // Pojedyncza strona
                            const pdf = new jsPDF({ 
                                orientation: 'landscape', 
                                unit: 'mm', 
                                format: 'a4' 
                            });
                            const pdfWidth = pdf.internal.pageSize.getWidth();
                            const pdfHeight = pdf.internal.pageSize.getHeight();
                            
                            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                            pdf.save(`${title}-gantt.pdf`);
                        } else {
                            // Wielostronicowy PDF
                            let rows = 1, cols = 1, format = 'a4';
                            
                            if (mode === 'multi-a4') { 
                                rows = 3; cols = 3; format = 'a4'; 
                            } else if (mode === 'multi-a3') { 
                                rows = 2; cols = 2; format = 'a3'; 
                            } else if (mode === 'multi-a2') { 
                                rows = 1; cols = 2; format = 'a2'; 
                            }
                            
                            const pdf = new jsPDF({ 
                                orientation: 'landscape', 
                                unit: 'mm', 
                                format: format 
                            });
                            
                            const pageWidth = pdf.internal.pageSize.getWidth();
                            const pageHeight = pdf.internal.pageSize.getHeight();
                            
                            const sliceWidth = canvas.width / cols;
                            const sliceHeight = canvas.height / rows;
                            
                            for (let r = 0; r < rows; r++) {
                                for (let c = 0; c < cols; c++) {
                                    if (r > 0 || c > 0) pdf.addPage();
                                    
                                    const tempCanvas = document.createElement('canvas');
                                    tempCanvas.width = sliceWidth;
                                    tempCanvas.height = sliceHeight;
                                    const ctx = tempCanvas.getContext('2d');
                                    
                                    ctx.drawImage(canvas, 
                                        c * sliceWidth, r * sliceHeight, 
                                        sliceWidth, sliceHeight, 
                                        0, 0, 
                                        sliceWidth, sliceHeight
                                    );
                                    
                                    const sliceData = tempCanvas.toDataURL('image/png');
                                    pdf.addImage(sliceData, 'PNG', 0, 0, pageWidth, pageHeight);
                                }
                            }
                            
                            pdf.save(`${title}-gantt-${mode}.pdf`);
                        }
                    } catch (error) {
                        console.error('PDF export error:', error);
                        alert('Error generating PDF: ' + error.message);
                    } finally {
                        // Usuń klasę stylu druku
                        chart.classList.remove('export-print');
                    }
                });
            }
        });
        
        // Load saved theme
        loadTheme();
