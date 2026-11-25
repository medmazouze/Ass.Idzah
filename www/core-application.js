

        /* Security release guard: the legacy public JSON sync is intentionally disabled.
           Enable cloud data operations only after the normalized RLS schema and Auth are deployed. */
        const EDZAKH_SECURE_CLOUD_READY = false;
        const STORAGE_KEY = 'edzakh_app_state_v4';

        const EMPTY_FACTORY_DATA = {
            currentUser: "الرئيس (مدير النظام)",
            settings: {
                associationName: "جمعية إدزاح إدبوكا للماء والتنمية والثقافة والتضامن الاجتماعي",
                waterTariff: 5.0,
                waterConnectionFee: 0,
                waterOtherFeeName: "مصاريف إضافية",
                waterOtherFee: 0,
                waterInvoiceTitle: "فاتورة استهلاك الماء",
                waterReceiptTitle: "وصل أداء فاتورة الماء",
                waterDocFooter: "شكراً لثقتكم وتعاونكم",
                waterDocColor: "#0e7490",
                showSubscriberCodeOnDocs: false
            },
            users: [
                { id: "USR-01", fullName: "مدير النظام", username: "admin", passwordHash: "123456", role: "الرئيس", phone: "", status: "ACTIVE", createdAt: new Date().toISOString().split('T')[0] }
            ],
            projects: [],
            transactions: [],
            transfers: [],
            advances: [],
            residents: [],
            memberRegistry: [],
            dues: [],
            dueRecords: [],
            importedResidentBatches: [],
            subscribers: [],
            waterInvoices: [],
            waterPayments: [],
            waterReadings: [],
            waterNotifications: [],
            auditLogs: []
        };

        const DEFAULT_DATA = {
            currentUser: "الرئيس (أحمد الفاضلي)",
            settings: {
                associationName: "جمعية إدزاح إدبوكا للماء والتنمية والثقافة والتضامن الاجتماعي",
                waterTariff: 5.0,
                waterConnectionFee: 0,
                waterOtherFeeName: "مصاريف إضافية",
                waterOtherFee: 0,
                waterInvoiceTitle: "فاتورة استهلاك الماء",
                waterReceiptTitle: "وصل أداء فاتورة الماء",
                waterDocFooter: "شكراً لثقتكم وتعاونكم",
                waterDocColor: "#0e7490",
                showSubscriberCodeOnDocs: false
            },
            users: [
                { id: "USR-01", fullName: "أحمد الفاضلي", username: "president", passwordHash: "123456", role: "الرئيس", phone: "0661234567", status: "ACTIVE", createdAt: "2026-01-01" },
                { id: "USR-02", fullName: "محمد السعدي", username: "treasurer", passwordHash: "123456", role: "أمين المال", phone: "0662987654", status: "ACTIVE", createdAt: "2026-01-01" },
                { id: "USR-03", fullName: "الحسن أومالك", username: "h_oumalek", passwordHash: "123456", role: "نائب أمين المال", phone: "0663112233", status: "ACTIVE", createdAt: "2026-02-10" }
            ],
            projects: [
                { id: "p1", name: "مشروع المسجد", budget: 50000, manager: "الرئيس", startDate: "2026-01-01", status: "ACTIVE" },
                { id: "p2", name: "مشروع البئر الجديد", budget: 80000, manager: "أمين المال", startDate: "2026-02-15", status: "ACTIVE" },
                { id: "p3", name: "مشروع عدادات الماء", budget: 30000, manager: "مكتب الجمعية", startDate: "2026-03-01", status: "ACTIVE" },
                { id: "p4", name: "مشروع المراحيض والتضامن", budget: 20000, manager: "الرئيس", startDate: "2026-04-10", status: "ACTIVE" }
            ],
            transactions: [
                { id: "TRX-101", receiptNo: "REC-2026-001", date: "2026-05-01", type: "INCOME", projectId: "p1", category: "تبرع محسن", party: "الحاج محمد إدبوكا", amount: 20000, method: "نقداً (كاش)", receiver: "الرئيس", reason: "تبرع لبناء الصومعة" },
                { id: "TRX-102", receiptNo: "EXP-2026-001", date: "2026-05-03", type: "EXPENSE", projectId: "p1", category: "مواد بناء وتجهيز", party: "شركة أسرار البناء", amount: 7000, method: "نقداً (كاش)", receiver: "الرئيس", reason: "شراء الأسمنت والأجر" },
                { id: "TRX-103", receiptNo: "REC-2026-002", date: "2026-05-05", type: "INCOME", projectId: "p2", category: "دعم مؤسساتي", party: "المجلس الجماعي", amount: 50000, method: "تحويل بنكي", receiver: "أمين المال", reason: "دعم حفر البئر الجديد" },
                { id: "TRX-104", receiptNo: "EXP-2026-002", date: "2026-05-08", type: "EXPENSE", projectId: "p2", category: "أجور عمال وصيانة", party: "شركة الحفر الهيدروليكي", amount: 30000, method: "تحويل بنكي", receiver: "أمين المال", reason: "دفعة أولى لأشغال الحفر" }
            ],
            transfers: [],
            advances: [
                { id: "ADV-01", creditor: "الرئيس", projectId: "p2", amount: 1500, paidAmount: 0, date: "2026-05-02", reason: "دفع ثمن وقود الشاحنة من المال الخاص" }
            ],
            residents: [
                { id: "H-001", headName: "إبراهيم إدبوكا", familyId: "F-10", region: "دوار إدزاح المركز", phone: "", membersCount: 5, duesPaid: 200, duesTotal: 200 },
                { id: "H-002", headName: "العربي أومالك", familyId: "F-11", region: "دوار إدزاح المركز", phone: "", membersCount: 4, duesPaid: 100, duesTotal: 200 },
                { id: "H-003", headName: "حسن السعدي", familyId: "F-12", region: "دوار إدزاح الفوقاني", phone: "", membersCount: 6, duesPaid: 0, duesTotal: 200 }
            ],
            dues: [
                { id: "DUE-01", title: "واجب اشتراك 2026 ومناسبة العيد", amount: 200, calcType: "أسري", targetProjectId: "p4", periodType: "CURRENT", status: "OPEN", createdAt: "2026-01-10" }
            ],
            dueRecords: [
                { id: "DR-01", dueId: "DUE-01", residentId: "H-001", requiredAmount: 200, paidAmount: 200, payments: [{ date: "2026-02-01", amount: 200, receiptNo: "REC-DUES-001" }] },
                { id: "DR-02", dueId: "DUE-01", residentId: "H-002", requiredAmount: 200, paidAmount: 100, payments: [{ date: "2026-02-15", amount: 100, receiptNo: "REC-DUES-002" }] },
                { id: "DR-03", dueId: "DUE-01", residentId: "H-003", requiredAmount: 200, paidAmount: 0, payments: [] }
            ],
            importedResidentBatches: [],
            subscribers: [
                { id: "SUB-01", name: "إبراهيم إدبوكا", meterNo: "M-101", lastReading: 120 },
                { id: "SUB-02", name: "العربي أومالك", meterNo: "M-102", lastReading: 85 },
                { id: "SUB-03", name: "حسن السعدي", meterNo: "M-103", lastReading: 210 }
            ],
            waterPayments: [],
            waterReadings: [],
            waterInvoices: [
                { id: "INV-2026-01", subId: "SUB-01", subName: "إبراهيم إدبوكا", meterNo: "M-101", period: "أبريل 2026", prevReading: 100, currReading: 120, consumption: 20, tariff: 5, total: 100, status: "PAID" },
                { id: "INV-2026-02", subId: "SUB-02", subName: "العربي أومالك", meterNo: "M-102", period: "أبريل 2026", prevReading: 70, currReading: 85, consumption: 15, tariff: 5, total: 75, status: "UNPAID" }
            ],
            waterNotifications: [],
            auditLogs: [
                { timestamp: "2026-05-01 10:00", user: "النظام", type: "تهيئة", details: "تشغيل تطبيق إدارة جمعية إدزاح إدبوكا الرقمي" }
            ]
        };

        let appData = {};
        let activeSectorContext = 'all';
        let projectChartInstance = null;
        let toastTimeout = null;
        let pendingResidentsImport = [];
        let pendingResidentsFileMeta = null;
        let waterWhatsAppQueue = [];
        let waterWhatsAppQueueIndex = 0;
        let waterWhatsAppQueueKind = 'invoice';

        document.addEventListener('DOMContentLoaded', function() {
            try {
                loadState();
                const today = new Date().toISOString().split('T')[0];
                ['inc-date', 'exp-date', 'transfer-date', 'adv-date', 'prj-start-date'].forEach(id => {
                    const el = document.getElementById(id);
                    if (el && !el.value) el.value = today;
                });
                const repDateEl = document.getElementById('report-date-str');
                if (repDateEl) repDateEl.textContent = new Date().toLocaleDateString('ar-MA');
                renderAll();
                checkAuthSession();
                loadCloudConfig();
                if (cloudConfig.url && cloudConfig.anonKey) {
                    syncFromCloudNow(true).then(() => {
                        subscribeCloudRealtime();
                    });
                }
                document.addEventListener('visibilitychange', () => {
                    if (document.visibilityState === 'visible' && cloudConfig.url && cloudConfig.anonKey && cloudConfig.autoSync !== false) {
                        syncFromCloudNow(true);
                    }
                });
            } catch (err) {
                console.error(err);
                showToast("حدث خطأ أثناء تهيئة التطبيق", true);
            }
        });

        function showToast(message, isError = false) {
            const banner = document.getElementById('toastBanner');
            const msgEl = document.getElementById('toastMessage');
            const iconEl = document.getElementById('toastIcon');
            if (!banner || !msgEl) return;

            msgEl.textContent = message;
            banner.className = `fixed bottom-5 left-5 z-50 max-w-md text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl border flex items-center gap-3 no-print ${
                isError ? 'bg-rose-950 border-rose-500/60' : 'bg-slate-900 border-emerald-500/60'
            }`;
            if (iconEl) {
                iconEl.className = isError
                    ? 'fa-solid fa-circle-exclamation text-rose-400 text-base'
                    : 'fa-solid fa-circle-check text-emerald-400 text-base';
            }
            banner.classList.remove('hidden');
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => banner.classList.add('hidden'), 3500);
        }

        function loadState() {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    appData = {
                        ...JSON.parse(JSON.stringify(DEFAULT_DATA)),
                        ...parsed,
                        settings: {
                            ...DEFAULT_DATA.settings,
                            ...(parsed.settings || {})
                        }
                    };
                    if (appData.settings.waterConnectionFee == null) appData.settings.waterConnectionFee = 0;
                    if (appData.settings.waterOtherFee == null) appData.settings.waterOtherFee = 0;
                    if (!appData.settings.waterOtherFeeName) appData.settings.waterOtherFeeName = 'مصاريف إضافية';
                    if (!Array.isArray(appData.dueRecords)) appData.dueRecords = [];
                    if (!Array.isArray(appData.importedResidentBatches)) appData.importedResidentBatches = [];
                    if (!Array.isArray(appData.waterPayments)) appData.waterPayments = [];
                    if (!Array.isArray(appData.waterReadings)) appData.waterReadings = [];
                    if (!Array.isArray(appData.waterNotifications)) appData.waterNotifications = [];
                    if (!Array.isArray(appData.users) || appData.users.length === 0) {
                        appData.users = JSON.parse(JSON.stringify(EMPTY_FACTORY_DATA.users));
                    }
                    ensureDueRecordsSynced();
                } catch (e) {
                    appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
                }
            } else {
                appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
                saveState();
            }
            if (!Array.isArray(appData.meetings)) appData.meetings = [];
            if (!Array.isArray(appData.memberRegistry)) appData.memberRegistry = [];
        }

        const CLOUD_CONFIG_KEY = 'edzakh_cloud_config_v1';
        const CLOUD_TABLE_NAME = 'association_state';

        let cloudConfig = {
            url: '',
            anonKey: '',
            workspaceId: 'edzakh_main',
            autoSync: true
        };
        let supabaseClient = null;
        let cloudRealtimeChannel = null;
        let isApplyingRemoteState = false;
        let cloudPushTimer = null;
        let lastKnownCloudUpdatedAt = null;

        function loadCloudConfig() {
            try {
                const raw = localStorage.getItem(CLOUD_CONFIG_KEY);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    cloudConfig = {
                        url: String(parsed.url || '').trim(),
                        anonKey: String(parsed.anonKey || '').trim(),
                        workspaceId: String(parsed.workspaceId || 'edzakh_main').trim() || 'edzakh_main',
                        autoSync: parsed.autoSync !== false
                    };
                }
            } catch (e) {}
            renderCloudConfigForm();
            updateCloudStatusBadge(cloudConfig.url && cloudConfig.anonKey ? 'connecting' : 'local');
        }

        function renderCloudConfigForm() {
            const urlEl = document.getElementById('cloud-supabase-url');
            const keyEl = document.getElementById('cloud-supabase-key');
            const wsEl = document.getElementById('cloud-workspace-id');
            const autoEl = document.getElementById('cloud-auto-sync');
            if (urlEl) urlEl.value = cloudConfig.url || '';
            if (keyEl) keyEl.value = cloudConfig.anonKey || '';
            if (wsEl) wsEl.value = cloudConfig.workspaceId || 'edzakh_main';
            if (autoEl) autoEl.checked = cloudConfig.autoSync !== false;
        }

        function updateCloudStatusBadge(mode, customText = '') {
            const dot = document.getElementById('cloudStatusDot');
            const txt = document.getElementById('cloudStatusText');
            const pill = document.getElementById('cloud-conn-pill');

            if (mode === 'synced') {
                if (dot) dot.className = 'w-2 h-2 rounded-full bg-emerald-400';
                if (txt) txt.textContent = customText || 'سحابي نشط';
                if (pill) {
                    pill.className = 'px-2.5 py-1 rounded-full font-bold bg-emerald-100 text-emerald-800';
                    pill.textContent = customText || 'متصل ومزامن مع السحابة';
                }
            } else if (mode === 'syncing' || mode === 'connecting') {
                if (dot) dot.className = 'w-2 h-2 rounded-full bg-sky-400 animate-pulse';
                if (txt) txt.textContent = customText || 'جاري المزامنة...';
                if (pill) {
                    pill.className = 'px-2.5 py-1 rounded-full font-bold bg-sky-100 text-sky-800';
                    pill.textContent = customText || 'جاري المزامنة السحابية...';
                }
            } else if (mode === 'error') {
                if (dot) dot.className = 'w-2 h-2 rounded-full bg-rose-400';
                if (txt) txt.textContent = customText || 'خطأ سحابي';
                if (pill) {
                    pill.className = 'px-2.5 py-1 rounded-full font-bold bg-rose-100 text-rose-800';
                    pill.textContent = customText || 'تعذر الاتصال بالسحابة';
                }
            } else {
                if (dot) dot.className = 'w-2 h-2 rounded-full bg-amber-400';
                if (txt) txt.textContent = customText || 'محلي فقط';
                if (pill) {
                    pill.className = 'px-2.5 py-1 rounded-full font-bold bg-amber-100 text-amber-800';
                    pill.textContent = customText || 'غير مرتبط بالسحابة (محلي فقط)';
                }
            }
        }

        function initSupabaseClient() {
            if (!cloudConfig.url || !cloudConfig.anonKey || !window.supabase || typeof window.supabase.createClient !== 'function') {
                supabaseClient = null;
                return false;
            }
            supabaseClient = window.supabase.createClient(cloudConfig.url, cloudConfig.anonKey, {
                auth: { persistSession: false, autoRefreshToken: false }
            });
            return true;
        }

        function subscribeCloudRealtime() {
            if (!supabaseClient) return;
            try {
                if (cloudRealtimeChannel) {
                    supabaseClient.removeChannel(cloudRealtimeChannel);
                    cloudRealtimeChannel = null;
                }
                cloudRealtimeChannel = supabaseClient
                    .channel('association_state_' + cloudConfig.workspaceId)
                    .on(
                        'postgres_changes',
                        {
                            event: '*',
                            schema: 'public',
                            table: CLOUD_TABLE_NAME,
                            filter: 'workspace_id=eq.' + cloudConfig.workspaceId
                        },
                        (payload) => {
                            const row = payload.new;
                            if (!row || !row.payload) return;
                            if (row.updated_at && row.updated_at === lastKnownCloudUpdatedAt) return;
                            lastKnownCloudUpdatedAt = row.updated_at || new Date().toISOString();
                            applyRemotePayload(row.payload, true);
                        }
                    )
                    .subscribe();
            } catch (e) {}
        }

        function applyRemotePayload(remotePayload, showNotification = false) {
            if (!remotePayload || typeof remotePayload !== 'object') return;
            isApplyingRemoteState = true;
            try {
                appData = {
                    ...JSON.parse(JSON.stringify(DEFAULT_DATA)),
                    ...remotePayload,
                    settings: {
                        ...DEFAULT_DATA.settings,
                        ...(remotePayload.settings || {})
                    }
                };
                if (!Array.isArray(appData.dueRecords)) appData.dueRecords = [];
                if (!Array.isArray(appData.importedResidentBatches)) appData.importedResidentBatches = [];
                if (!Array.isArray(appData.users) || appData.users.length === 0) {
                    appData.users = JSON.parse(JSON.stringify(EMPTY_FACTORY_DATA.users));
                }
                appData.users.forEach(u => {
                    if (!u.passwordHash) u.passwordHash = '123456';
                });
                ensureDueRecordsSynced();
                localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
                renderAll();
                updateCloudStatusBadge('synced', 'سحابي نشط');
                if (showNotification) {
                    showToast("تم تحديث البيانات تلقائياً من موقع آخر");
                }
            } finally {
                isApplyingRemoteState = false;
            }
        }

        async function pushToCloudNow(silent = false) {
            if (!EDZAKH_SECURE_CLOUD_READY) {
                updateCloudStatusBadge('error', 'بانتظار تأمين قاعدة البيانات');
                if (!silent) showToast('المزامنة معلقة مؤقتاً لحماية بيانات الجمعية، إلى حين تفعيل مخطط Supabase الآمن.', true);
                return false;
            }
            if (!initSupabaseClient()) {
                if (!silent) showToast("يرجى ضبط إعدادات Supabase أولاً", true);
                return false;
            }
            updateCloudStatusBadge('syncing', 'جاري الرفع...');
            const updatedAt = new Date().toISOString();
            const { error } = await supabaseClient
                .from(CLOUD_TABLE_NAME)
                .upsert({
                    workspace_id: cloudConfig.workspaceId,
                    payload: appData,
                    updated_at: updatedAt
                }, { onConflict: 'workspace_id' });

            if (error) {
                updateCloudStatusBadge('error', 'خطأ بالرفع');
                if (!silent) showToast("تعذر الرفع للسحابة: " + error.message, true);
                return false;
            }
            lastKnownCloudUpdatedAt = updatedAt;
            updateCloudStatusBadge('synced', 'سحابي نشط');
            if (!silent) showToast("تمت مزامنة البيانات إلى السحابة بنجاح");
            return true;
        }

        async function syncFromCloudNow(silent = false) {
            if (!EDZAKH_SECURE_CLOUD_READY) {
                updateCloudStatusBadge('error', 'بانتظار تأمين قاعدة البيانات');
                if (!silent) showToast('لم يتم تفعيل جلب البيانات بعد. سنفعّله بعد إعداد المصادقة وسياسات الحماية.', true);
                return false;
            }
            if (!initSupabaseClient()) {
                if (!silent) showToast("يرجى ضبط إعدادات Supabase أولاً", true);
                return false;
            }
            updateCloudStatusBadge('syncing', 'جاري الجلب...');
            const { data, error } = await supabaseClient
                .from(CLOUD_TABLE_NAME)
                .select('payload, updated_at')
                .eq('workspace_id', cloudConfig.workspaceId)
                .maybeSingle();

            if (error) {
                updateCloudStatusBadge('error', 'خطأ بالاتصال');
                if (!silent) showToast("تعذر جلب البيانات السحابية: " + error.message, true);
                return false;
            }

            if (data && data.payload) {
                lastKnownCloudUpdatedAt = data.updated_at || new Date().toISOString();
                applyRemotePayload(data.payload, false);
                if (!silent) showToast("تم جلب أحدث البيانات السحابية");
                return true;
            } else {
                const pushed = await pushToCloudNow(true);
                if (pushed && !silent) showToast("تم إنشاء سجل الجمعية في السحابة ومزامنته");
                return pushed;
            }
        }

        function scheduleCloudPush() {
            if (!EDZAKH_SECURE_CLOUD_READY) return;
            if (isApplyingRemoteState) return;
            if (!cloudConfig.url || !cloudConfig.anonKey || cloudConfig.autoSync === false) return;
            clearTimeout(cloudPushTimer);
            cloudPushTimer = setTimeout(() => {
                pushToCloudNow(true);
            }, 600);
        }

        async function handleSaveCloudConfig(e) {
            e.preventDefault();
            const url = document.getElementById('cloud-supabase-url').value.trim().replace(/\/+$/, '');
            const anonKey = document.getElementById('cloud-supabase-key').value.trim();
            const workspaceId = (document.getElementById('cloud-workspace-id').value.trim() || 'edzakh_main');
            const autoSync = Boolean(document.getElementById('cloud-auto-sync').checked);

            if (!url || !anonKey) {
                showToast("يرجى إدخال رابط المشروع وAnon Key من Supabase", true);
                return;
            }

            cloudConfig = { url, anonKey, workspaceId, autoSync };
            localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(cloudConfig));

            if (!EDZAKH_SECURE_CLOUD_READY) {
                updateCloudStatusBadge('error', 'الإعداد محفوظ - المزامنة تنتظر تأمين القاعدة');
                showToast('تم حفظ إعدادات Supabase محلياً. لم تُرفع أي بيانات بعد؛ المزامنة ستُفعّل بعد إعداد الحماية.', false);
                return;
            }
            const ok = await syncFromCloudNow(false);
            if (ok) subscribeCloudRealtime();
        }

        function disconnectCloudConfig() {
            cloudConfig = { url: '', anonKey: '', workspaceId: 'edzakh_main', autoSync: true };
            localStorage.removeItem(CLOUD_CONFIG_KEY);
            if (cloudRealtimeChannel && supabaseClient) {
                supabaseClient.removeChannel(cloudRealtimeChannel);
                cloudRealtimeChannel = null;
            }
            supabaseClient = null;
            renderCloudConfigForm();
            updateCloudStatusBadge('local');
            showToast("تم فصل الاتصال السحابي والعودة للتخزين المحلي");
        }

        function openCloudSettingsModal() {
            switchTab('users');
            renderCloudConfigForm();
            document.getElementById('cloud-supabase-url')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        function openSqlHelperModal() {
            openModal('modalSqlHelper');
        }

        function copySupabaseSql() {
            const codeEl = document.getElementById('supabaseSqlCode');
            if (!codeEl) return;
            navigator.clipboard?.writeText(codeEl.textContent || '').then(() => {
                showToast("تم نسخ سكربت SQL");
            }).catch(() => {
                showToast("حدد النص وانسخه يدوياً");
            });
        }

        function saveState() {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
                scheduleCloudPush();
            } catch (e) {
                showToast("تعذر حفظ البيانات محلياً", true);
            }
        }

        function ensureDueRecordsSynced() {
            appData.dues.forEach(d => {
                if (!d.periodType) d.periodType = 'CURRENT';
                if (!d.status) d.status = 'OPEN';
                appData.residents.forEach(r => {
                    const exists = appData.dueRecords.some(rec => rec.dueId === d.id && rec.residentId === r.id);
                    if (!exists) {
                        appData.dueRecords.push({
                            id: "DR-" + d.id + "-" + r.id,
                            dueId: d.id,
                            residentId: r.id,
                            requiredAmount: Number(d.amount) || 0,
                            paidAmount: 0,
                            payments: []
                        });
                    }
                });
            });
        }

        function recalculateResidentDuesTotals(residentId) {
            const res = appData.residents.find(r => r.id === residentId);
            if (!res) return;
            const records = appData.dueRecords.filter(rec => rec.residentId === residentId);
            if (records.length > 0) {
                res.duesTotal = records.reduce((sum, rec) => sum + (Number(rec.requiredAmount) || 0), 0);
                res.duesPaid = records.reduce((sum, rec) => sum + (Number(rec.paidAmount) || 0), 0);
            }
        }

        function logAudit(type, details) {
            const now = new Date();
            const timeStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
            appData.auditLogs.unshift({
                timestamp: timeStr,
                user: appData.currentUser || "الرئيس",
                type,
                details
            });
            saveState();
        }

        function switchUser(val) {
            appData.currentUser = val;
            saveState();
            logAudit("تغيير المستخدم", "تبديل المستخدم الحاضر إلى: " + val);
            renderAll();
            showToast("تم تبديل المستخدم الحاضر إلى: " + val);
        }

        function toggleMainMenu() {
            const drawer = document.getElementById('mainSideDrawer');
            if (drawer && drawer.classList.contains('is-open')) closeMainMenu();
            else openMainMenu();
        }

        function openMainMenu() {
            const drawer = document.getElementById('mainSideDrawer');
            const backdrop = document.getElementById('mainMenuBackdrop');
            const trigger = document.getElementById('mainMenuToggle');
            if (!drawer || !backdrop) return;
            drawer.classList.add('is-open');
            backdrop.classList.add('is-open');
            drawer.setAttribute('aria-hidden', 'false');
            backdrop.setAttribute('aria-hidden', 'false');
            if (trigger) trigger.setAttribute('aria-expanded', 'true');
            document.body.classList.add('menu-open');
        }

        function closeMainMenu() {
            const drawer = document.getElementById('mainSideDrawer');
            const backdrop = document.getElementById('mainMenuBackdrop');
            const trigger = document.getElementById('mainMenuToggle');
            if (drawer) { drawer.classList.remove('is-open'); drawer.setAttribute('aria-hidden', 'true'); }
            if (backdrop) { backdrop.classList.remove('is-open'); backdrop.setAttribute('aria-hidden', 'true'); }
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        }

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') closeMainMenu();
        });

        let meetingSignatureTarget = null;
        let meetingSignatureDrawing = false;
        let meetingSignatureHasInk = false;

        function meetingId() { return 'MTG-' + Date.now() + '-' + Math.floor(Math.random() * 1000); }
        function generateNextMeetingCode(){const meetings=Array.isArray(appData.meetings)?appData.meetings:[];const last=meetings[0];const match=String(last?.attendanceCode||'').match(/(\d+)$/);const next=match?parseInt(match[1],10)+1:meetings.length+1;return 'MTG-'+String(next).padStart(4,'0');}
        function refreshNextMeetingCode(){const el=document.getElementById('meeting-code');if(el)el.value=generateNextMeetingCode();}
        function meetingEscape(value) { return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
        function renderMeetingMinutesRegistry(){const box=document.getElementById('meeting-minutes-registry');if(!box)return;const rows=(appData.meetings||[]).filter(m=>(m.minutes||'').trim()||(m.decisions||[]).length||m.approval?.archived);box.innerHTML=rows.length?rows.map(m=>`<div class="border rounded-lg p-3 flex flex-wrap items-center gap-2"><div class="flex-1 min-w-0"><b class="text-sm">${meetingEscape(m.title||'اجتماع')}</b><div class="text-xs text-slate-500 mt-1">${meetingEscape(m.date||'')} · ${(m.minutes||'').trim()?'محضر محفوظ':'قرارات/مخرجات مسجلة'}</div></div><button type="button" class="bg-emerald-700 text-white rounded-lg px-3 py-2 text-xs font-bold" onclick="openMeetingDetail('${meetingEscape(m.id)}')">فتح المحضر</button></div>`).join(''):'<p class="text-xs text-slate-500">لا توجد محاضر محفوظة بعد.</p>'; }function meetingOpenSection(id,button){document.querySelectorAll('#sec-meetings .meeting-content-pane').forEach(el=>el.classList.add('hidden'));const target=document.getElementById(id);if(target)target.classList.remove('hidden');document.querySelectorAll('#meeting-main-hub .meeting-square-tile').forEach(el=>el.classList.remove('active'));if(button)button.classList.add('active');const hint=document.getElementById('meeting-pane-hint');if(hint)hint.textContent=({ 'meetings-registry-pane':'سجل الاجتماعات المنشأة سابقاً؛ افتح الاجتماع المطلوب لمتابعة الحضور والمحضر.','member-registry-card':'سجل المنخرطين المركزي','meeting-minutes-card':'سجل المحاضر المحفوظة؛ التحرير من داخل الاجتماع','meeting-create-card':'إنشاء اجتماع جديد وتوجيه الاستدعاءات' })[id]||'';if(id==='meeting-minutes-card')renderMeetingMinutesRegistry();if(id==='member-registry-card')renderCentralMembers();if(target)target.scrollIntoView({behavior:'smooth',block:'start'});}function meetingGoTo(id){meetingOpenSection(id,null);}
        function saveCentralMember(){
            const name=(document.getElementById('member-reg-name')?.value||'').trim();
            if(!name){showToast('أدخل الاسم الكامل للمنخرط',true);return;}
            if(!Array.isArray(appData.memberRegistry))appData.memberRegistry=[];
            const number=(document.getElementById('member-reg-number')?.value||'').trim();
            if(number&&appData.memberRegistry.some(x=>String(x.membershipNo||'').toLowerCase()===number.toLowerCase())){showToast('رقم الانخراط مسجل من قبل',true);return;}
            const roles=(document.getElementById('member-reg-roles')?.value||'').split(/[،,]/).map(x=>x.trim()).filter(Boolean);
            appData.memberRegistry.push({id:'MEM-'+Date.now().toString(36).toUpperCase(),fullName:name,phone:(document.getElementById('member-reg-phone')?.value||'').trim(),nationalId:(document.getElementById('member-reg-cin')?.value||'').trim(),membershipNo:number,roles,createdAt:new Date().toISOString(),status:'active'});
            ['member-reg-name','member-reg-phone','member-reg-cin','member-reg-number','member-reg-roles'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
            saveState();renderCentralMembers();renderMeetingInvitees();renderMeetingOverview();showToast('تمت إضافة المنخرط إلى السجل المركزي');
        }
        function renderCentralMembers(){
            const box=document.getElementById('member-reg-list');if(!box)return;
            const q=(document.getElementById('member-reg-search')?.value||'').trim().toLowerCase();
            const rows=(appData.memberRegistry||[]).filter(m=>(m.fullName+' '+m.membershipNo+' '+m.phone+' '+(m.roles||[]).join(' ')).toLowerCase().includes(q));
            box.innerHTML=rows.length?rows.map(m=>`<div class="member-reg-row border rounded-lg p-2"><div class="member-reg-info"><div class="font-bold text-sm">${meetingEscape(m.fullName)}</div><div class="text-[10px] text-slate-500">${meetingEscape(m.membershipNo||'دون رقم')} · ${meetingEscape((m.roles||[]).join('، ')||'دون صفة محددة')}</div><div class="text-[10px] text-slate-500">${meetingEscape(m.phone||'')}</div></div><div class="member-reg-actions"><button type="button" onclick="editCentralMemberRoles('${meetingEscape(m.id)}')" class="text-xs text-emerald-700 font-bold">تعديل الصفات</button></div></div>`).join(''):'<p class="text-xs text-slate-500">لا يوجد منخرطون مسجلون.</p>';
        }
        function editCentralMemberRoles(id){const m=(appData.memberRegistry||[]).find(x=>x.id===id);if(!m)return;const value=prompt('أدخل الصفات مفصولة بفاصلة', (m.roles||[]).join('، '));if(value===null)return;m.roles=value.split(/[،,]/).map(x=>x.trim()).filter(Boolean);saveState();renderCentralMembers();renderMeetingInvitees();}
        function meetingPersonName(person) { return person.fullName || person.name || person.headName || 'اسم غير محدد'; }
        function renderMeetingInvitees() {
            const box = document.getElementById('meeting-invitees'); if (!box) return;
            const q = (document.getElementById('meeting-resident-search')?.value || '').trim().toLowerCase();
            const role = document.getElementById('meeting-role-filter')?.value || '';
            const members = Array.isArray(appData.memberRegistry) ? appData.memberRegistry : [];
            const filtered = members.filter(r => (meetingPersonName(r).toLowerCase().includes(q) || String(r.phone || '').includes(q) || (r.roles||[]).join(' ').toLowerCase().includes(q)) && (!role || (r.roles||[]).includes(role)));
            if (!filtered.length) { box.innerHTML = '<p class="text-xs text-slate-500 p-2">لا يوجد منخرطون مطابقون. أضف المنخرط أولاً إلى سجل المنخرطين.</p>'; return; }
            box.innerHTML = filtered.map(r => `<label class="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-sm"><input type="checkbox" class="meeting-invitee-check accent-emerald-700" value="${meetingEscape(r.id)}"><span class="font-bold">${meetingEscape(meetingPersonName(r))}</span><span class="text-[10px] text-slate-400 mr-auto">${meetingEscape((r.roles||[]).join('، '))}</span></label>`).join('');
        }
        function meetingToggleEveryone(checked){document.querySelectorAll('#meeting-invitees .meeting-invitee-check').forEach(el=>el.checked=checked);const master=document.getElementById('meeting-invite-everyone');if(master)master.checked=checked;}
        let meetingPeriodFilter='all';function setMeetingPeriod(v){meetingPeriodFilter=v;renderMeetings();}
        function createMeeting() {
            const title = document.getElementById('meeting-title')?.value.trim();
            const date = document.getElementById('meeting-date')?.value;
            if (!title || !date) { showToast('يرجى إدخال عنوان الاجتماع وتاريخه', true); return; }
            const selected = document.getElementById('meeting-invite-everyone')?.checked ? (appData.memberRegistry||[]).map(p=>String(p.id)) : [...document.querySelectorAll('.meeting-invitee-check:checked')].map(el => el.value);
            const attendees = selected.map(id => { const p = (appData.memberRegistry||[]).find(r => String(r.id) === String(id)); return { personId:id, name:meetingPersonName(p || {}), phone:p?.phone || '', nationalId:p?.nationalId||p?.cin||p?.identityNumber||'', roleSnapshot:[...(p?.roles||[])], invited:true, attendance:'pending', registeredBy:'self', signature:null }; });
            const meeting = { id:meetingId(), title, type:document.getElementById('meeting-type').value, date, time:document.getElementById('meeting-time').value, place:document.getElementById('meeting-place').value.trim(), endTime:'', president:document.getElementById('meeting-president')?.value.trim()||'', secretary:document.getElementById('meeting-secretary')?.value.trim()||'', caller:'مكتب الجمعية', agenda:document.getElementById('meeting-agenda').value.split('\n').map(x=>x.trim()).filter(Boolean), attendees, minutes:'', decisions:[], approval:{president:false,secretary:false,board:false,archived:false}, attendanceCode:generateNextMeetingCode(), status:'مسودة', createdAt:new Date().toISOString() };
            appData.meetings.unshift(meeting); saveState(); renderMeetings(); renderMeetingOverview(); refreshNextMeetingCode();
            ['meeting-title','meeting-place','meeting-agenda','meeting-president','meeting-secretary'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
            document.querySelectorAll('.meeting-invitee-check').forEach(el=>el.checked=false);if(document.getElementById('meeting-invite-everyone'))document.getElementById('meeting-invite-everyone').checked=false;
            showToast('تم إنشاء الاجتماع وحفظه في سجل الاجتماعات'); meetingOpenSection('meetings-registry-pane',document.querySelector('#meeting-main-hub .meeting-square-tile'));
        }
        function renderMeetings() {
            if (!Array.isArray(appData.meetings)) appData.meetings=[];
            const list=document.getElementById('meetings-list'); if (!list) return;
            const q=(document.getElementById('meeting-list-search')?.value||'').trim().toLowerCase();
            const today=new Date().toISOString().slice(0,10);
            const yearEl=document.getElementById('meeting-filter-year'),typeEl=document.getElementById('meeting-filter-type'),statusEl=document.getElementById('meeting-filter-status');
            if(yearEl){const keep=yearEl.value;const years=[...new Set(appData.meetings.map(m=>String(m.date||'').slice(0,4)).filter(y=>/^\d{4}$/.test(y)))].sort().reverse();yearEl.innerHTML='<option value="">كل السنوات</option>'+years.map(y=>`<option value="${y}">${y}</option>`).join('');yearEl.value=years.includes(keep)?keep:'';}
            const meetings=appData.meetings.filter(m=>(String(m.title||'')+' '+String(m.date||'')+' '+String(m.place||'')+' '+String(m.type||'')).toLowerCase().includes(q))
              .filter(m=>meetingPeriodFilter==='all'?true:meetingPeriodFilter==='upcoming'?m.date>=today:meetingPeriodFilter==='past'?m.date<today:!!m.approval?.archived)
              .filter(m=>!yearEl?.value||String(m.date||'').startsWith(yearEl.value))
              .filter(m=>!typeEl?.value||m.type===typeEl.value)
              .filter(m=>!statusEl?.value||(statusEl.value==='archived'?!!m.approval?.archived:statusEl.value==='approved'?!!m.approval?.board:!m.approval?.board&&!m.approval?.archived));
            document.querySelectorAll('.meeting-period-btn').forEach(b=>b.classList.toggle('active',b.dataset.period===meetingPeriodFilter));
            list.innerHTML=meetings.length?meetings.map(m=>`<div class="border border-slate-200 rounded-xl p-3 flex flex-wrap items-center gap-3"><div class="flex-1 min-w-[180px]"><div class="font-extrabold text-slate-800">${meetingEscape(m.title)}</div><div class="text-xs text-slate-500 mt-1">${meetingEscape(m.type)} · ${meetingEscape(m.date)} ${meetingEscape(m.time||'')} · ${meetingEscape(m.place||'')}</div><div class="text-[11px] text-slate-500 mt-1">المدعوون: ${(m.attendees||[]).length} · الحاضرون: ${(m.attendees||[]).filter(a=>a.attendance==='present').length} · القرارات: ${(m.decisions||[]).length} · ${m.approval?.archived?'مؤرشف':m.approval?.board?'مصادق عليه':'مسودة'}</div></div><button type="button" onclick="openMeetingDetail('${meetingEscape(m.id)}')" class="bg-emerald-700 text-white rounded-lg px-3 py-2 text-xs font-bold">فتح الاجتماع</button></div>`).join(''):'<p class="text-sm text-slate-500">لا توجد اجتماعات مطابقة.</p>';
            renderMeetingInvitees(); renderMeetingOverview();
        }
        function openMeetingDetail(id) {
            const m=appData.meetings.find(x=>x.id===id); const box=document.getElementById('meeting-detail'); if(!m||!box)return; meetingOpenSection('meetings-registry-pane',document.querySelector('#meeting-main-hub .meeting-square-tile'));
            if(!m.approval)m.approval={president:false,secretary:false,board:false,archived:false};
            box.classList.remove('hidden');
            const status=m.approval.archived?'مؤرشف':m.approval.board?'مصادق عليه من المكتب':m.approval.president&&m.approval.secretary?'في انتظار مصادقة المكتب المسير':m.approval.president||m.approval.secretary?'في انتظار اعتماد الطرف الآخر':'مسودة';
            box.innerHTML=`<div class="flex flex-wrap justify-between items-center gap-2 mb-4"><div><h3 class="font-extrabold text-lg">${meetingEscape(m.title)}</h3><p class="text-xs text-slate-500">${meetingEscape(m.date)} · ${meetingEscape(m.time||'')}  · ${meetingEscape(m.place||'')} · ${meetingEscape(status)}<br>الرئيس: ${meetingEscape(m.president||'غير محدد')} · كاتب المحضر: ${meetingEscape(m.secretary||'غير محدد')}</p></div><div class="flex gap-2"><button type="button" onclick="printMeetingInvitations('${meetingEscape(m.id)}')" class="bg-indigo-700 text-white rounded-lg px-3 py-2 text-xs font-bold">طباعة الاستدعاءات</button><button type="button" onclick="printMeetingMinutes('${meetingEscape(m.id)}')" class="bg-slate-800 text-white rounded-lg px-3 py-2 text-xs font-bold">طباعة المحضر</button></div></div>
            <div class="mb-4"><h4 class="font-bold text-sm mb-2">جدول الأعمال</h4><ol class="list-decimal pr-5 text-sm space-y-1">${(m.agenda||[]).map(x=>`<li>${meetingEscape(x)}</li>`).join('')||'<li>غير محدد</li>'}</ol></div>
            <div class="flex justify-between items-center mb-2"><h4 class="font-bold text-sm">لائحة الحضور والتوقيعات</h4><span class="text-xs text-slate-500">تسجيل ذاتي أو بالنيابة من هاتف واحد</span></div><div class="meeting-stats-kpis grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3"><div class="rounded-lg bg-emerald-50 p-2 text-center"><b class="block text-lg text-emerald-800">${(m.attendees||[]).filter(a=>a.attendance==='present').length}</b><small class="text-[10px]">حاضر</small></div><div class="rounded-lg bg-rose-50 p-2 text-center"><b class="block text-lg text-rose-800">${(m.attendees||[]).filter(a=>a.attendance==='absent').length}</b><small class="text-[10px]">غائب</small></div><div class="rounded-lg bg-amber-50 p-2 text-center"><b class="block text-lg text-amber-800">${(m.attendees||[]).filter(a=>a.attendance==='excused').length}</b><small class="text-[10px]">اعتذار</small></div><div class="rounded-lg bg-slate-100 p-2 text-center"><b class="block text-lg text-slate-800">${(m.attendees||[]).filter(a=>!a.attendance||a.attendance==='pending').length}</b><small class="text-[10px]">لم يسجل</small></div></div>
            <div class="rounded-lg bg-emerald-50 p-3 mb-3 space-y-2"><div class="flex items-center justify-between"><span class="text-xs font-bold text-emerald-900">إدارة الحضور</span><button type="button" class="w-8 h-8 rounded-full bg-white border border-emerald-200 text-emerald-800" title="إظهار رمز الاجتماع" aria-label="إظهار رمز الاجتماع" onclick="toggleMeetingCode(this)"><i class="fa-solid fa-eye text-xs"></i></button></div><div class="meeting-code-value hidden text-center rounded-lg bg-white border border-dashed border-emerald-300 p-2" hidden><span class="text-[10px] text-slate-500">رمز الاجتماع</span><div class="text-lg font-black tracking-[0.25em] text-emerald-900">${meetingEscape(m.attendanceCode||'------')}</div></div><div class="flex flex-wrap gap-2"><select id="meeting-add-person" class="flex-1 min-w-[160px] border rounded-lg p-2 text-xs"><option value="">إضافة منخرط من السجل</option>${(appData.memberRegistry||[]).map(p=>`<option value="${meetingEscape(p.id)}">${meetingEscape(meetingPersonName(p))}</option>`).join('')}</select><button type="button" onclick="addMeetingAttendee('${meetingEscape(m.id)}')" class="bg-emerald-700 text-white rounded-lg px-3 py-2 text-xs">إضافة من اللائحة</button><button type="button" onclick="addMeetingAttendeeManual('${meetingEscape(m.id)}')" class="bg-white border border-slate-300 text-slate-700 rounded-lg px-3 py-2 text-xs">إضافة يدوية</button><button type="button" onclick="meetingSelfRegisterPrompt()" class="bg-white border border-emerald-300 text-emerald-800 rounded-lg px-3 py-2 text-xs">تسجيل ذاتي بالرمز</button></div><p class="text-[10px] text-emerald-800">التسجيل الذاتي هنا محلي على هذا الجهاز؛ التسجيل من أجهزة متعددة يحتاج ربطاً سحابياً لاحقاً.</p></div>
            <div class="meeting-attendance-list space-y-2">${(m.attendees||[]).map((a,i)=>`<article class="meeting-attendee-card border border-slate-200 rounded-xl p-3"><div class="meeting-attendee-data flex items-center gap-4 overflow-x-auto whitespace-nowrap text-xs"><strong class="meeting-attendee-name text-sm font-extrabold text-slate-900 min-w-fit">${meetingEscape(a.name)}</strong><span class="meeting-attendee-field">${meetingEscape((a.roleSnapshot||[]).join('، ')||'غير محددة')}</span><span class="meeting-attendee-field">${meetingEscape(a.nationalId||(appData.memberRegistry||[]).find(p=>String(p.id)===String(a.personId))?.nationalId||'غير مسجل')}</span><span class="meeting-attendee-field">${meetingEscape(a.phone||'غير مسجل')}</span></div><div class="meeting-attendance-actions flex flex-wrap gap-2 mt-3"><button type="button" onclick="setMeetingAttendanceState('${meetingEscape(m.id)}',${i},'present')" class="bg-emerald-50 text-emerald-800 rounded-lg px-3 py-2 text-xs font-bold">حاضر</button><button type="button" onclick="setMeetingAttendanceState('${meetingEscape(m.id)}',${i},'absent')" class="bg-rose-50 text-rose-700 rounded-lg px-3 py-2 text-xs font-bold">غائب</button><button type="button" onclick="setMeetingAttendanceState('${meetingEscape(m.id)}',${i},'excused')" class="bg-amber-50 text-amber-800 rounded-lg px-3 py-2 text-xs font-bold">اعتذار</button><button type="button" onclick="openMeetingSignature('${meetingEscape(m.id)}',${i})" class="bg-slate-100 text-slate-700 rounded-lg px-3 py-2 text-xs font-bold">${a.signature?'تعديل التوقيع':'التوقيع'}</button><span class="text-[11px] self-center text-slate-500">${a.attendance==='present'?'الحالة: حاضر':a.attendance==='absent'?'الحالة: غائب':a.attendance==='excused'?'الحالة: اعتذار':'لم يسجل بعد'}</span></div></article>`).join('')||'<p class="text-xs text-slate-500">لا يوجد مدعوون بعد.</p>'}</div>            <div class="mt-4 grid grid-cols-1 gap-3"><div><label class="block text-xs font-bold mb-1">مناقشات الاجتماع ومخرجاته</label><textarea id="meeting-minutes-text" rows="5" class="w-full border border-slate-300 rounded-lg p-2 text-sm">${meetingEscape(m.minutes||'')}</textarea><button type="button" onclick="saveMeetingMinutes('${meetingEscape(m.id)}')" class="mt-2 bg-emerald-700 text-white rounded-lg px-4 py-2 text-xs font-bold">حفظ المحضر</button></div><div class="border-t pt-3"><button type="button" class="w-full flex items-center justify-between rounded-xl border border-amber-200 bg-amber-50 px-3 py-3 text-sm font-extrabold text-amber-900" onclick="toggleMeetingDecisionPanel(this)" aria-expanded="false"><span><i class="fa-solid fa-list-check ml-2"></i>القرارات والتوصيات (${(m.decisions||[]).length})</span><i class="fa-solid fa-chevron-down text-xs"></i></button><div class="meeting-decision-panel hidden pt-3" hidden><label class="block text-xs font-bold mb-1">إضافة قرار أو توصية</label><div class="flex flex-col sm:flex-row gap-2"><input id="meeting-decision-text" class="flex-1 border border-slate-300 rounded-lg p-2 text-sm" placeholder="نص القرار أو التوصية"><input id="meeting-decision-owner" class="sm:w-44 border border-slate-300 rounded-lg p-2 text-sm" placeholder="المسؤول عن التنفيذ"><input id="meeting-decision-deadline" type="date" class="sm:w-40 border border-slate-300 rounded-lg p-2 text-sm" title="أجل التنفيذ"><button type="button" onclick="addMeetingDecision('${meetingEscape(m.id)}')" class="bg-amber-600 text-white rounded-lg px-4 py-2 text-xs font-bold">إضافة القرار</button></div><ul class="list-disc pr-5 mt-2 text-xs space-y-1">${(m.decisions||[]).map((d,di)=>`<li class="border-b border-amber-100 py-2"><div class="font-bold">${meetingEscape(d.text)}</div><div class="text-slate-500 mt-1">المسؤول: ${meetingEscape(d.owner||'غير محدد')} · الأجل: ${meetingEscape(d.deadline||'غير محدد')} · الحالة: ${d.status==='done'?'منفذ':d.status==='progress'?'قيد التنفيذ':'لم يبدأ'}</div><div class="flex flex-wrap gap-1 mt-2"><button type="button" onclick="setMeetingDecisionStatus('${meetingEscape(m.id)}',${di},'pending')" class="rounded px-2 py-1 bg-slate-100">لم يبدأ</button><button type="button" onclick="setMeetingDecisionStatus('${meetingEscape(m.id)}',${di},'progress')" class="rounded px-2 py-1 bg-amber-100">قيد التنفيذ</button><button type="button" onclick="setMeetingDecisionStatus('${meetingEscape(m.id)}',${di},'done')" class="rounded px-2 py-1 bg-emerald-100">منفذ</button></div></li>`).join('')||'<li class="text-slate-500">لا توجد قرارات مسجلة بعد.</li>'}</ul></div></div></div>
            <div class="border-t mt-4 pt-3"><h4 class="font-bold text-sm mb-2">مسار اعتماد المحضر وأرشفته</h4><div class="flex flex-wrap gap-2 text-xs"><button type="button" onclick="setMeetingApproval('${meetingEscape(m.id)}','president')" class="rounded-lg px-3 py-2 ${m.approval.president?'bg-emerald-100 text-emerald-800':'bg-slate-100'}">${m.approval.president?'✓ ':' '}اعتماد الرئيس</button><button type="button" onclick="setMeetingApproval('${meetingEscape(m.id)}','secretary')" class="rounded-lg px-3 py-2 ${m.approval.secretary?'bg-emerald-100 text-emerald-800':'bg-slate-100'}">${m.approval.secretary?'✓ ':' '}توقيع الكاتب</button><button type="button" onclick="setMeetingApproval('${meetingEscape(m.id)}','board')" class="rounded-lg px-3 py-2 ${m.approval.board?'bg-emerald-100 text-emerald-800':'bg-slate-100'}" ${m.approval.president&&m.approval.secretary?'':'disabled'}>مصادقة المكتب المسير</button><button type="button" onclick="setMeetingApproval('${meetingEscape(m.id)}','archived')" class="rounded-lg px-3 py-2 ${m.approval.archived?'bg-emerald-100 text-emerald-800':'bg-slate-100'}" ${m.approval.board?'':'disabled'}>أرشفة المحضر</button></div><p class="text-[10px] text-slate-500 mt-2">الحالة الحالية: ${meetingEscape(status)}. هذه دورة اعتماد تنظيمية محلية، وليست توقيعاً إلكترونياً موثقاً أو صلاحيات خادمية.</p></div>`;
            box.scrollIntoView({behavior:'smooth',block:'start'});
        }
        function addMeetingAttendee(id){const m=appData.meetings.find(x=>x.id===id);const sel=document.getElementById('meeting-add-person');if(!m||!sel?.value)return showToast('اختر منخرطاً أولاً',true);const person=(appData.memberRegistry||[]).find(x=>String(x.id)===String(sel.value));if(!person)return;if((m.attendees||[]).some(a=>String(a.personId)===String(person.id))){showToast('هذا الشخص موجود مسبقاً في لائحة الاجتماع',true);return;}m.attendees.push({personId:person.id,name:meetingPersonName(person),phone:person.phone||'',nationalId:person.nationalId||person.cin||person.identityNumber||'',roleSnapshot:[...(person.roles||[])],invited:false,attendance:'pending',registeredBy:'proxy',proxyRecorder:appData.currentUser||'المكتب المسير',signature:null});saveState();openMeetingDetail(id);}
        function addMeetingAttendeeManual(id){const m=appData.meetings.find(x=>x.id===id);if(!m)return;meetingManualTargetId=id;['meeting-manual-name','meeting-manual-cin','meeting-manual-phone','meeting-manual-role'].forEach(x=>{const e=document.getElementById(x);if(e)e.value='';});const modal=document.getElementById('meetingManualAttendeeModal');modal.classList.remove('hidden');modal.classList.add('flex');document.getElementById('meeting-manual-name')?.focus();}
        let meetingManualTargetId=null;
        function closeMeetingManualModal(){const modal=document.getElementById('meetingManualAttendeeModal');modal.classList.add('hidden');modal.classList.remove('flex');meetingManualTargetId=null;}
        function saveMeetingManualAttendee(){const id=meetingManualTargetId;const m=appData.meetings.find(x=>x.id===id);if(!m)return;const name=(document.getElementById('meeting-manual-name')?.value||'').trim(),nationalId=(document.getElementById('meeting-manual-cin')?.value||'').trim(),phone=(document.getElementById('meeting-manual-phone')?.value||'').trim(),role=(document.getElementById('meeting-manual-role')?.value||'').trim();if(!name||!nationalId||!phone||!role){showToast('يرجى ملء جميع المعلومات المطلوبة',true);return;}if((m.attendees||[]).some(a=>String(a.name||'').trim().toLowerCase()===name.toLowerCase()||String(a.nationalId||'').trim().toLowerCase()===nationalId.toLowerCase())){showToast('هذا الشخص مسجل مسبقاً في الاجتماع',true);return;}m.attendees.push({personId:null,name,phone,nationalId,roleSnapshot:[role],invited:false,attendance:'pending',registeredBy:'manual',proxyRecorder:appData.currentUser||'المكتب المسير',signature:null});saveState();closeMeetingManualModal();openMeetingDetail(id);showToast('تمت إضافة الحاضر يدوياً');}
        function meetingSelfRegisterPrompt(){const code=window.prompt('أدخل رمز الاجتماع');if(!code)return;const m=(appData.meetings||[]).find(x=>String(x.attendanceCode||'').toUpperCase()===code.trim().toUpperCase());if(!m){showToast('رمز الاجتماع غير صحيح',true);return;}const memberId=window.prompt('أدخل رقم الانخراط للشخص المراد تسجيل حضوره (التسجيل المحلي)');if(!memberId)return;const person=(appData.memberRegistry||[]).find(x=>String(x.membershipNo||'')===memberId.trim()||String(x.id)===memberId.trim());if(!person){showToast('لم يتم العثور على المنخرط في السجل',true);return;}if((m.attendees||[]).some(a=>String(a.personId)===String(person.id))){showToast('تم تسجيل هذا الشخص مسبقاً في الاجتماع',true);return;}m.attendees.push({personId:person.id,name:meetingPersonName(person),phone:person.phone||'',nationalId:person.nationalId||person.cin||person.identityNumber||'',roleSnapshot:[...(person.roles||[])],invited:false,attendance:'present',registeredBy:'self',signature:null});saveState();openMeetingDetail(m.id);showToast('تم تسجيل الحضور ذاتياً على هذا الجهاز');}
        function setMeetingAttendanceState(id,index,state){const m=appData.meetings.find(x=>x.id===id);if(!m||!m.attendees?.[index])return;m.attendees[index].attendance=state;saveState();openMeetingDetail(id);}
        function setMeetingApproval(id,step){const m=appData.meetings.find(x=>x.id===id);if(!m)return;if(!m.approval)m.approval={president:false,secretary:false,board:false,archived:false};if(step==='board'&&(!m.approval.president||!m.approval.secretary)){showToast('يجب اعتماد الرئيس وتوقيع الكاتب أولاً',true);return;}if(step==='archived'&&!m.approval.board){showToast('لا يمكن الأرشفة قبل مصادقة المكتب المسير',true);return;}m.approval[step]=!m.approval[step];saveState();openMeetingDetail(id);}
        
        function markMeetingAttendance(id,index,mode) { const m=appData.meetings.find(x=>x.id===id); if(!m||!m.attendees[index])return; let recorder=''; if(mode==='proxy'){recorder=window.prompt('اكتب اسم الشخص الذي يسجل الحضور من هذا الهاتف:','');if(recorder===null)return;if(!recorder.trim()){showToast('يرجى إدخال اسم من قام بالتسجيل بالنيابة',true);return;}} m.attendees[index].attendance='present';m.attendees[index].registeredBy=mode==='proxy'?'proxy':'self';m.attendees[index].proxyRecorder=recorder.trim();saveState();openMeetingDetail(id); }
        function saveMeetingMinutes(id) { const m=appData.meetings.find(x=>x.id===id);if(!m)return;m.minutes=document.getElementById('meeting-minutes-text')?.value||'';saveState();renderMeetingMinutesRegistry();renderMeetingOverview();showToast('تم حفظ محضر الاجتماع'); }
        function addMeetingDecision(id) { const m=appData.meetings.find(x=>x.id===id);const input=document.getElementById('meeting-decision-text');if(!m||!input?.value.trim()){showToast('أدخل نص القرار أولاً',true);return;}m.decisions=m.decisions||[];m.decisions.push({text:input.value.trim(),owner:document.getElementById('meeting-decision-owner')?.value.trim()||'',deadline:document.getElementById('meeting-decision-deadline')?.value||'',status:'pending',createdAt:new Date().toISOString()});saveState();renderMeetingOverview();openMeetingDetail(id); }
        function setMeetingDecisionStatus(id,index,status){const m=appData.meetings.find(x=>x.id===id);if(!m||!m.decisions?.[index])return;m.decisions[index].status=status;m.decisions[index].updatedAt=new Date().toISOString();saveState();renderMeetingOverview();openMeetingDetail(id);}
        function openMeetingSignature(id,index) { meetingSignatureTarget={id,index};const modal=document.getElementById('meetingSignatureModal');const canvas=document.getElementById('meeting-signature-canvas');const ctx=canvas.getContext('2d');ctx.clearRect(0,0,canvas.width,canvas.height);meetingSignatureHasInk=false;const m=appData.meetings.find(x=>x.id===id);document.getElementById('meeting-signature-title').textContent='توقيع: '+(m?.attendees[index]?.name||'الحاضر');modal.classList.remove('hidden');modal.classList.add('flex'); }
        function closeMeetingSignature(){const m=document.getElementById('meetingSignatureModal');m.classList.add('hidden');m.classList.remove('flex');meetingSignatureTarget=null;}
        function clearMeetingSignature(){const c=document.getElementById('meeting-signature-canvas');c.getContext('2d').clearRect(0,0,c.width,c.height);meetingSignatureHasInk=false;}
        function saveMeetingSignature(){if(!meetingSignatureTarget||!meetingSignatureHasInk){showToast('يرجى إضافة التوقيع أولاً',true);return;}const {id,index}=meetingSignatureTarget;const m=appData.meetings.find(x=>x.id===id);if(!m)return;m.attendees[index].signature=document.getElementById('meeting-signature-canvas').toDataURL('image/png');m.attendees[index].attendance='present';saveState();closeMeetingSignature();openMeetingDetail(id);showToast('تم حفظ التوقيع');}
        function setupMeetingSignatureCanvas(){const c=document.getElementById('meeting-signature-canvas');if(!c||c.dataset.ready)return;c.dataset.ready='1';const ctx=c.getContext('2d');ctx.lineWidth=4;ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle='#111827';const pos=e=>{const r=c.getBoundingClientRect();return {x:(e.clientX-r.left)*c.width/r.width,y:(e.clientY-r.top)*c.height/r.height};};c.addEventListener('pointerdown',e=>{meetingSignatureDrawing=true;meetingSignatureHasInk=true;c.setPointerCapture(e.pointerId);const p=pos(e);ctx.beginPath();ctx.moveTo(p.x,p.y);});c.addEventListener('pointermove',e=>{if(!meetingSignatureDrawing)return;const p=pos(e);ctx.lineTo(p.x,p.y);ctx.stroke();});['pointerup','pointercancel','lostpointercapture'].forEach(ev=>c.addEventListener(ev,()=>meetingSignatureDrawing=false));}
        function printMeetingInvitations(id){const m=appData.meetings.find(x=>x.id===id);if(!m)return;const people=(m.attendees||[]).map(a=>`<article class="invite"><h2>استدعاء لحضور اجتماع</h2><p>إلى السيد(ة): <b>${meetingEscape(a.name)}</b></p><p>يشرف ${meetingEscape(m.caller||'المكتب المسير')} دعوتكم لحضور ${meetingEscape(m.type)} بعنوان: <b>${meetingEscape(m.title)}</b>.</p><p>التاريخ: ${meetingEscape(m.date)} — الساعة: ${meetingEscape(m.time||'')} — المكان: ${meetingEscape(m.place||'')}</p><p>جدول الأعمال:</p><ol>${(m.agenda||[]).map(x=>`<li>${meetingEscape(x)}</li>`).join('')}</ol><p class="sign">عن المكتب المسير<br>الإمضاء والخاتم</p></article>`).join('');meetingPrintWindow('استدعاءات الاجتماع',people);}
        function printMeetingMinutes(id){
            const m=appData.meetings.find(x=>x.id===id);if(!m)return;
            const st=appData.settings||{},association=meetingEscape(st.associationName||'جمعية إدزاح إدبوكا للماء والتنمية والثقافة والتضامن الاجتماعي');
            const logo=document.querySelector('.association-header .brand-logo')?.src||document.querySelector('.login-logo')?.src||'';
            const attendees=(m.attendees||[]).map(a=>`<tr><td>${meetingEscape(a.name)}</td><td>${meetingEscape((a.roleSnapshot||[]).join('، ')||'—')}</td><td>${a.attendance==='present'?'حاضر':a.attendance==='absent'?'غائب':a.attendance==='excused'?'اعتذار':'لم يسجل'}</td><td>${a.registeredBy==='proxy'?'بالنيابة':a.registeredBy==='manual'?'إضافة يدوية':'ذاتي'}</td><td>${a.signature?'<img class="sig" src="'+a.signature+'">':''}</td></tr>`).join('');
            const decisions=(m.decisions||[]).map(d=>`<li>${meetingEscape(d.text)}<br><small>المسؤول: ${meetingEscape(d.owner||'غير محدد')} · الأجل: ${meetingEscape(d.deadline||'غير محدد')} · الحالة: ${d.status==='done'?'منفذ':d.status==='progress'?'قيد التنفيذ':'لم يبدأ'}</small></li>`).join('');
            const html=`<div class="letterhead">${logo?`<img src="${logo}">`:''}<div><b>${association}</b><small>محضر اجتماع رسمي</small></div></div><h1>محضر اجتماع</h1><h2>${meetingEscape(m.title)}</h2><div class="meta"><span>النوع: ${meetingEscape(m.type)}</span><span>الرمز: ${meetingEscape(m.attendanceCode||'—')}</span><span>التاريخ: ${meetingEscape(m.date)}</span><span>الساعة: ${meetingEscape(m.time||'—')}</span><span>المكان: ${meetingEscape(m.place||'—')}</span></div><h3>جدول الأعمال</h3><ol>${(m.agenda||[]).map(x=>`<li>${meetingEscape(x)}</li>`).join('')||'<li>غير محدد</li>'}</ol><h3>لائحة الحضور والتوقيعات</h3><table><tr><th>الاسم الكامل</th><th>الصفة</th><th>الحالة</th><th>طريقة التسجيل</th><th>التوقيع</th></tr>${attendees}</table><h3>مناقشات ومخرجات الاجتماع</h3><p class="pre">${meetingEscape(m.minutes||'')}</p><h3>القرارات والتوصيات وتتبع التنفيذ</h3><ol>${decisions||'<li>لا توجد قرارات مسجلة</li>'}</ol><div class="signatures"><div>رئيس الاجتماع<br><br>الإمضاء: ........................</div><div>كاتب المحضر<br><br>الإمضاء: ........................</div><div>خاتم الجمعية<br><br>........................</div></div>`;
            meetingPrintWindow('محضر الاجتماع',html);
        }
        function meetingPrintWindow(title,content){const w=window.open('','_blank');if(!w){showToast('يرجى السماح بالنوافذ المنبثقة للطباعة',true);return;}w.document.write(`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>${meetingEscape(title)}</title></head><body>${content}<script>window.onload=()=>window.print()<\/script>







</body></html>`);w.document.close();}

        document.addEventListener('DOMContentLoaded', () => { setupMeetingSignatureCanvas(); renderCentralMembers(); renderMeetingInvitees(); renderMeetingOverview(); refreshNextMeetingCode(); });

        function openSectorChooser(){if(isWaterReaderSession())return enterSector('water');const el=document.getElementById('sectorChooserOverlay');if(el){el.classList.remove('hidden');el.classList.add('flex');}}
        function closeSectorChooser(){const el=document.getElementById('sectorChooserOverlay');if(el){el.classList.add('hidden');el.classList.remove('flex');}}
        function enterSector(sector){
            if(isWaterReaderSession())sector='water';
            activeSectorContext=sector||'all';closeSectorChooser();applySectorNavigation();
            if(activeSectorContext==='water'){renderWater();switchTab('water');}
            else if(activeSectorContext==='mosque'||activeSectorContext==='other'){const pf=document.getElementById('filter-finance-project');if(pf)pf.value='ALL';renderProjects();renderFinanceTable();switchTab('projects');}
            else {renderDashboard();switchTab('dashboard');}
        }
        function applySectorNavigation(){
            const allowed=activeSectorContext==='water'?['tab-water','tab-dashboard']:activeSectorContext==='mosque'||activeSectorContext==='other'?['tab-dashboard','tab-projects','tab-finance']:null;
            document.querySelectorAll('.nav-tab').forEach(b=>{if(isWaterReaderSession())b.classList.toggle('hidden',b.id!=='tab-water');else if(allowed)b.classList.toggle('hidden',!allowed.includes(b.id));else b.classList.remove('hidden');});
        }

        function switchTab(tabId) {
            if(isWaterReaderSession() && tabId!=='water'){showToast('حسابك مفوض لتسجيل قراءات الماء فقط',true);tabId='water';}
            else if(activeSectorContext==='water'&&!['water','dashboard'].includes(tabId)){showToast('أنت داخل قطاع الماء؛ غيّر القطاع للانتقال إلى مجال آخر',true);tabId='water';}
            else if(['mosque','other'].includes(activeSectorContext)&&!['projects','finance','dashboard'].includes(tabId)){showToast('هذا القسم خارج القطاع المحدد',true);tabId='projects';}
            const tabs = ['dashboard', 'projects', 'finance', 'custody', 'population', 'residents', 'water', 'meetings', 'reports', 'users'];
            tabs.forEach(t => {
                const sec = document.getElementById('sec-' + t);
                const btn = document.getElementById('tab-' + t);
                if (!sec || !btn) return;
                if (t === tabId) {
                    sec.classList.remove('hidden');
                    btn.classList.add('active');
                    btn.setAttribute('aria-current', 'page');
                } else {
                    sec.classList.add('hidden');
                    btn.classList.remove('active');
                    btn.removeAttribute('aria-current');
                }
            });
            if (tabId === 'dashboard') {
                renderDashboardChart();
            }
            applySectorNavigation();
            closeMainMenu();
        }

        function openModal(modalId) {
            const el = document.getElementById(modalId);
            if (el) el.classList.remove('hidden');
            if (modalId === 'modalWaterReading') { const d=new Date().toISOString().slice(0,10);if(document.getElementById('water-reading-date'))document.getElementById('water-reading-date').value=d;if(document.getElementById('water-reading-period'))document.getElementById('water-reading-period').value=d.slice(0,7);const reader=isWaterReaderSession(),title=document.getElementById('water-reading-modal-title'),submit=document.getElementById('water-reading-submit-label'),preview=document.getElementById('water-reading-preview');if(title)title.innerHTML='<i class=\"fa-solid fa-gauge text-sky-300\"></i> '+(reader?'تسجيل قراءة فقط':'تسجيل قراءة عداد وإصدار فاتورة');if(submit)submit.textContent=reader?'حفظ القراءة وإرسالها للمكتب':'إصدار الفاتورة';if(preview)preview.classList.toggle('hidden',reader);calculateWaterPreview(); }
        }

        function closeModal(modalId) {
            const el = document.getElementById(modalId);
            if (el) el.classList.add('hidden');
        }

        function renderAll() {
            renderActiveUserDisplay();
            populateSelectOptions();
            renderSettingsForm();
            renderDashboard();
            renderProjects();
            renderFinanceTable();
            renderCustody();
            renderResidents();
            renderWater();
            renderMeetings();
            renderUsers();
            renderReportsAndAudit();
        }

        function renderSettingsForm() {
            const nameInput = document.getElementById('set-assoc-name');
            const tariffInput = document.getElementById('set-water-tariff');
            if (nameInput) nameInput.value = appData.settings.associationName;
            if (tariffInput) tariffInput.value = appData.settings.waterTariff;

            const headerName = document.getElementById('header-assoc-name');
            if (headerName) headerName.textContent = 'جمعية إدزاح إدبوكا للماء والتنمية';
            const infoName = document.getElementById('info-assoc-name');
            if (infoName) infoName.textContent = appData.settings.associationName;

            const repTitle = document.getElementById('report-assoc-title');
            if (repTitle) repTitle.textContent = appData.settings.associationName;

            const footerName = document.getElementById('footer-assoc-name');
            if (footerName) footerName.textContent = `${appData.settings.associationName} © 2026 - جميع الحقوق محفوظة`;

            const tariffKpi = document.getElementById('water-kpi-tariff');
            if (tariffKpi) tariffKpi.textContent = `${Number(appData.settings.waterTariff).toFixed(2)} د.م / م³`;
        }

        function handleSaveSettings(e) {
            e.preventDefault();
            const assocName = document.getElementById('set-assoc-name').value.trim();
            const tariff = parseFloat(document.getElementById('set-water-tariff').value);
            if (!assocName || isNaN(tariff) || tariff <= 0) {
                showToast("يرجى إدخال بيانات إعدادات صحيحة", true);
                return;
            }
            appData.settings.associationName = assocName;
            appData.settings.waterTariff = tariff;
            logAudit("تحديث الإعدادات", `تحديث اسم الجمعية وتعرفة الماء (${tariff} د.م/م³)`);
            saveState();
            renderAll();
            showToast("تم حفظ إعدادات النظام بنجاح");
        }

        function confirmResetData() {
            localStorage.removeItem(STORAGE_KEY);
            appData = JSON.parse(JSON.stringify(EMPTY_FACTORY_DATA));
            saveState();
            closeModal('modalConfirmReset');
            renderAll();
            showToast("تمت إعادة ضبط المصنع وتفريغ النظام بالكامل (100% فارغ)");
        }

        function populateSelectOptions() {
            const userSelect = document.getElementById('currentUserSelect');
            if (userSelect) {
                const activeUsers = appData.users.filter(u => u.status === 'ACTIVE');
                const preferred = appData.currentUser;
                userSelect.innerHTML = '';

                activeUsers.forEach(u => {
                    const label = `${u.role} (${u.fullName})`;
                    const opt = document.createElement('option');
                    opt.value = label;
                    opt.textContent = label;
                    opt.className = 'text-slate-800 bg-white';
                    userSelect.appendChild(opt);
                });

                if (preferred && Array.from(userSelect.options).some(o => o.value === preferred)) {
                    userSelect.value = preferred;
                } else if (userSelect.options.length > 0) {
                    userSelect.value = userSelect.options[0].value;
                    appData.currentUser = userSelect.value;
                }
            }

            const prjSelects = ['inc-project', 'exp-project', 'transfer-from', 'transfer-to', 'filter-finance-project', 'adv-project', 'due-target-project', 'report-excel-project'];
            prjSelects.forEach(id => {
                const el = document.getElementById(id);
                if (!el) return;
                const currentVal = el.value;
                el.innerHTML = '';
                if (id === 'filter-finance-project' || id === 'report-excel-project') {
                    el.innerHTML = '<option value="ALL">جميع المشاريع والأنشطة</option>';
                }
                appData.projects.forEach(p => {
                    const opt = document.createElement('option');
                    opt.value = p.id;
                    opt.textContent = p.name;
                    el.appendChild(opt);
                });
                if (currentVal && Array.from(el.options).some(o => o.value === currentVal)) {
                    el.value = currentVal;
                }
            });

            const subSelect = document.getElementById('water-subscriber-select');
            if (subSelect) {
                const prevSub = subSelect.value;
                subSelect.innerHTML = '';
                appData.subscribers.forEach(s => {
                    const opt = document.createElement('option');
                    opt.value = s.id;
                    opt.textContent = `${s.name} (عداد: ${s.meterNo})`;
                    subSelect.appendChild(opt);
                });
                if (prevSub && Array.from(subSelect.options).some(o => o.value === prevSub)) {
                    subSelect.value = prevSub;
                }
            }
        }

        function getProjectStats(projectId) {
            const incomes = appData.transactions
                .filter(t => t.projectId === projectId && t.type === 'INCOME')
                .reduce((sum, t) => sum + Number(t.amount), 0);

            const expenses = appData.transactions
                .filter(t => t.projectId === projectId && t.type === 'EXPENSE')
                .reduce((sum, t) => sum + Number(t.amount), 0);

            const transfersIn = appData.transfers
                .filter(tr => tr.toProjectId === projectId)
                .reduce((sum, tr) => sum + Number(tr.amount), 0);

            const transfersOut = appData.transfers
                .filter(tr => tr.fromProjectId === projectId)
                .reduce((sum, tr) => sum + Number(tr.amount), 0);

            const balance = (incomes + transfersIn) - (expenses + transfersOut);
            return { incomes, expenses, transfersIn, transfersOut, balance };
        }

        function renderDashboardSectorSummary(){
            const box=document.getElementById('dashboard-sector-summary');if(!box)return;
            const groups=[{key:'water',label:'ميزانية الماء',test:p=>/ماء|بئر|عداد/i.test(p.name||''),color:'sky'},{key:'mosque',label:'ميزانية المسجد',test:p=>/مسجد/i.test(p.name||''),color:'emerald'},{key:'other',label:'مشاريع أخرى',test:p=>!/ماء|بئر|عداد|مسجد/i.test(p.name||''),color:'amber'}];
            const cards=groups.map(g=>{const ps=appData.projects.filter(g.test),budget=ps.reduce((n,p)=>n+Number(p.budget||0),0),stats=ps.reduce((a,p)=>{const x=getProjectStats(p.id);a.income+=x.incomes;a.expense+=x.expenses;a.balance+=x.balance;return a;},{income:0,expense:0,balance:0});return {label:g.label,budget,...stats,count:ps.length};});
            const totalBudget=appData.projects.reduce((n,p)=>n+Number(p.budget||0),0),totalStats=appData.projects.reduce((a,p)=>{const x=getProjectStats(p.id);a.income+=x.incomes;a.expense+=x.expenses;a.balance+=x.balance;return a;},{income:0,expense:0,balance:0});
            cards.push({label:'الميزانية العامة',budget:totalBudget,...totalStats,count:appData.projects.length,total:true});
            box.innerHTML=cards.map(c=>`<div class="rounded-xl border ${c.total?'border-emerald-300 bg-emerald-50':'border-slate-200 bg-slate-50'} p-3"><div class="font-black text-slate-800 text-xs">${c.label}</div><div class="text-lg font-black ${c.total?'text-emerald-800':'text-slate-800'} mt-1">${c.budget.toLocaleString('ar-MA')} د.م.</div><div class="text-[10px] text-slate-500">الميزانية المخصصة · ${c.count} مشروع</div><div class="grid grid-cols-2 gap-1 mt-2 text-[10px]"><span>مداخيل: <b class="text-emerald-700">${c.income.toLocaleString('ar-MA')}</b></span><span>مصاريف: <b class="text-rose-700">${c.expense.toLocaleString('ar-MA')}</b></span><span class="col-span-2 border-t pt-1">الرصيد: <b>${c.balance.toLocaleString('ar-MA')} د.م.</b></span></div></div>`).join('');
        }

        function renderDashboard() {
            let totalIncome = 0;
            let totalExpense = 0;

            appData.transactions.forEach(t => {
                if (t.type === 'INCOME') totalIncome += Number(t.amount);
                if (t.type === 'EXPENSE') totalExpense += Number(t.amount);
            });

            const netBalance = totalIncome - totalExpense;
            const waterUnpaidTotal = appData.waterInvoices.reduce((sum, i) => sum + waterInvoiceBalance(i), 0);

            const duesUnpaidTotal = appData.residents
                .reduce((sum, r) => sum + Math.max(0, Number(r.duesTotal) - Number(r.duesPaid)), 0);

            const advancesTotal = appData.advances
                .reduce((sum, a) => sum + Math.max(0, Number(a.amount) - Number(a.paidAmount)), 0);

            document.getElementById('kpi-total-income').textContent = totalIncome.toLocaleString() + ' د.م.';
            document.getElementById('kpi-total-expenses').textContent = totalExpense.toLocaleString() + ' د.م.';
            document.getElementById('kpi-net-balance').textContent = netBalance.toLocaleString() + ' د.م.';
            document.getElementById('kpi-receivables').textContent = (waterUnpaidTotal + duesUnpaidTotal).toLocaleString() + ' د.م.';
            document.getElementById('kpi-water-unpaid').textContent = waterUnpaidTotal.toLocaleString() + ' د.م.';
            document.getElementById('kpi-dues-unpaid').textContent = duesUnpaidTotal.toLocaleString() + ' د.م.';
            document.getElementById('kpi-payables-advances').textContent = advancesTotal.toLocaleString() + ' د.م.';
            renderDashboardSectorSummary();

            const prjGrid = document.getElementById('dashboard-projects-grid');
            prjGrid.innerHTML = appData.projects.length
                ? appData.projects.map(p => {
                    const stats = getProjectStats(p.id);
                    return `
                        <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                            <div class="flex justify-between items-center">
                                <h4 class="font-bold text-slate-800 text-xs">${p.name}</h4>
                                <span class="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">نشط</span>
                            </div>
                            <div class="text-lg font-black ${stats.balance >= 0 ? 'text-emerald-700' : 'text-rose-600'}">
                                ${stats.balance.toLocaleString()} د.م.
                            </div>
                            <div class="text-[11px] text-slate-500 flex justify-between border-t pt-1">
                                <span>مداخيل: <strong class="text-emerald-600">${stats.incomes.toLocaleString()}</strong></span>
                                <span>مصاريف: <strong class="text-rose-600">${stats.expenses.toLocaleString()}</strong></span>
                            </div>
                        </div>
                    `;
                }).join('')
                : '<div class="col-span-full bg-white p-6 rounded-xl border border-slate-200 text-center text-xs text-slate-400">لا توجد مشاريع مسجلة حالياً.</div>';

            const recentBody = document.getElementById('dashboard-recent-transactions');
            recentBody.innerHTML = appData.transactions.length
                ? appData.transactions.slice(0, 5).map(t => {
                    const prj = appData.projects.find(p => p.id === t.projectId);
                    return `
                        <tr class="hover:bg-slate-50 border-b border-slate-100">
                            <td class="p-2 font-mono font-bold text-slate-700">${t.receiptNo}</td>
                            <td class="p-2">${t.date}</td>
                            <td class="p-2 font-bold">${prj ? prj.name : 'عام'}</td>
                            <td class="p-2">${t.reason || t.category}</td>
                            <td class="p-2 font-bold ${t.type === 'INCOME' ? 'text-emerald-600' : 'text-rose-600'}">
                                ${t.type === 'INCOME' ? '+' : '-'}${Number(t.amount).toLocaleString()} د.م.
                            </td>
                            <td class="p-2 text-slate-500">${t.receiver}</td>
                        </tr>
                    `;
                }).join('')
                : '<tr><td colspan="6" class="p-4 text-center text-slate-400">لا توجد معاملات مالية مسجلة حتى الآن.</td></tr>';

            renderDashboardChart();
        }

        function renderDashboardChart() {
            const ctx = document.getElementById('projectChart');
            if (!ctx || typeof Chart === 'undefined') return;

            const labels = appData.projects.length ? appData.projects.map(p => p.name) : ['لا توجد مشاريع'];
            const dataBalances = appData.projects.length
                ? appData.projects.map(p => Math.max(0, getProjectStats(p.id).balance))
                : [1];

            if (projectChartInstance) projectChartInstance.destroy();

            projectChartInstance = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels,
                    datasets: [{
                        data: dataBalances,
                        backgroundColor: appData.projects.length ? ['#059669', '#0284c7', '#d97706', '#e11d48', '#8b5cf6'] : ['#cbd5e1'],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { font: { family: 'Cairo', size: 10 } } }
                    }
                }
            });
        }

        function renderProjects() {
            const grid = document.getElementById('full-projects-grid');
            if (!grid) return;
            const visibleProjects=appData.projects.filter(p=>activeSectorContext==='mosque'?/مسجد/i.test(p.name||''):activeSectorContext==='other'?!/مسجد|ماء|بئر|عداد/i.test(p.name||''):true);
            if (!visibleProjects.length) {
                grid.innerHTML = '<div class="col-span-full bg-white p-8 rounded-xl border border-slate-200 text-center text-xs text-slate-400">لا توجد مشاريع ضمن القطاع المحدد بعد. يمكن إضافتها من زر إضافة مشروع جديد.</div>';
                return;
            }
            grid.innerHTML = visibleProjects.map(p => {
                const stats = getProjectStats(p.id);
                return `
                    <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-4">
                        <div class="flex justify-between items-start gap-2 border-b pb-3">
                            <div>
                                <h3 class="font-bold text-slate-800 text-base">${p.name}</h3>
                                <p class="text-xs text-slate-500">المسؤول: ${p.manager} | البداية: ${p.startDate}</p>
                            </div>
                            <div class="flex items-center gap-1.5 shrink-0">
                                <span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">نشط</span>
                                <button type="button" onclick="deleteProjectById('${p.id}')" title="مسح المشروع أو النشاط" class="bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer">
                                    <i class="fa-solid fa-trash"></i> مسح
                                </button>
                            </div>
                        </div>
                        <div class="bg-slate-50 p-3 rounded-lg flex justify-between items-center">
                            <span class="text-xs font-bold text-slate-600">الرصيد المالي الحالي:</span>
                            <span class="text-xl font-black ${stats.balance >= 0 ? 'text-emerald-700' : 'text-rose-600'}">${stats.balance.toLocaleString()} د.م.</span>
                        </div>
                        <div class="space-y-1.5 text-xs text-slate-600">
                            <div class="flex justify-between"><span>إجمالي المداخيل:</span> <strong class="text-emerald-600">${stats.incomes.toLocaleString()} د.م.</strong></div>
                            <div class="flex justify-between"><span>إجمالي المصاريف:</span> <strong class="text-rose-600">${stats.expenses.toLocaleString()} د.م.</strong></div>
                            ${stats.transfersIn > 0 ? `<div class="flex justify-between text-amber-700"><span>تحويلات واردة:</span> <strong>+${stats.transfersIn.toLocaleString()} د.م.</strong></div>` : ''}
                            ${stats.transfersOut > 0 ? `<div class="flex justify-between text-amber-700"><span>تحويلات صادرة:</span> <strong>-${stats.transfersOut.toLocaleString()} د.م.</strong></div>` : ''}
                        </div>
                        <div class="pt-2 flex gap-2">
                            <button type="button" onclick="quickAddIncomeForProject('${p.id}')" class="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold py-1.5 text-xs rounded border border-emerald-200 cursor-pointer">+ مدخول</button>
                            <button type="button" onclick="quickAddExpenseForProject('${p.id}')" class="flex-1 bg-rose-50 hover:bg-rose-100 text-rose-800 font-bold py-1.5 text-xs rounded border border-rose-200 cursor-pointer">- مصروف</button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function deleteProjectById(projectId) {
            const prjIndex = appData.projects.findIndex(p => p.id === projectId);
            if (prjIndex === -1) return;
            const prj = appData.projects[prjIndex];

            const linkedTrxCount = appData.transactions.filter(t => t.projectId === projectId).length;
            const linkedTransfersCount = appData.transfers.filter(tr => tr.fromProjectId === projectId || tr.toProjectId === projectId).length;
            const linkedAdvancesCount = appData.advances.filter(a => a.projectId === projectId).length;
            const totalLinked = linkedTrxCount + linkedTransfersCount + linkedAdvancesCount;

            let msg = `هل أنت متأكد من مسح/حذف المشروع أو النشاط "${prj.name}"؟`;
            if (totalLinked > 0) {
                msg = `تنبيه: يرتبط هذا المشروع بـ (${linkedTrxCount}) معاملة مالية و (${linkedTransfersCount}) تحويل داخلي و (${linkedAdvancesCount}) سلفة.\nسيتم حذف المشروع وفك ارتباط السجلات المرتبطة به دون حذف المعاملات المالية من السجل العام.\nهل تود المتابعة؟`;
            }

            if (!confirm(msg)) return;

            appData.projects.splice(prjIndex, 1);
            appData.transactions.forEach(t => { if (t.projectId === projectId) t.projectId = ''; });
            appData.transfers = appData.transfers.filter(tr => tr.fromProjectId !== projectId && tr.toProjectId !== projectId);
            appData.advances.forEach(a => { if (a.projectId === projectId) a.projectId = ''; });
            appData.dues.forEach(d => { if (d.targetProjectId === projectId) d.targetProjectId = ''; });

            logAudit("مسح مشروع / نشاط", `حذف المشروع (${prj.name}) - معاملات مرتبطة سابقة: ${linkedTrxCount}`);
            saveState();
            renderAll();
            showToast("تم مسح المشروع وتحديث القوائم والرسوم البيانية");
        }

        function quickAddIncomeForProject(pid) {
            document.getElementById('inc-project').value = pid;
            openModal('modalAddIncome');
        }

        function quickAddExpenseForProject(pid) {
            document.getElementById('exp-project').value = pid;
            openModal('modalAddExpense');
        }

        function renderFinanceTable() {
            const prjFilter = document.getElementById('filter-finance-project').value;
            const typeFilter = document.getElementById('filter-finance-type').value;
            const searchVal = (document.getElementById('filter-finance-search').value || '').toLowerCase();

            const contextProjectIds=activeSectorContext==='water'?appData.projects.filter(p=>/ماء|بئر|عداد/i.test(p.name||'')).map(p=>p.id):activeSectorContext==='mosque'?appData.projects.filter(p=>/مسجد/i.test(p.name||'')).map(p=>p.id):activeSectorContext==='other'?appData.projects.filter(p=>!/مسجد|ماء|بئر|عداد/i.test(p.name||'')).map(p=>p.id):null;
            const list = appData.transactions.filter(t => {
                if (contextProjectIds && !contextProjectIds.includes(t.projectId)) return false;
                if (prjFilter !== 'ALL' && t.projectId !== prjFilter) return false;
                if (typeFilter !== 'ALL' && t.type !== typeFilter) return false;
                if (searchVal) {
                    const matchParty = (t.party || '').toLowerCase().includes(searchVal);
                    const matchReason = (t.reason || '').toLowerCase().includes(searchVal);
                    const matchRcpt = (t.receiptNo || '').toLowerCase().includes(searchVal);
                    if (!matchParty && !matchReason && !matchRcpt) return false;
                }
                return true;
            });

            const tbody = document.getElementById('finance-table-body');
            tbody.innerHTML = list.length
                ? list.map(t => {
                    const prj = appData.projects.find(p => p.id === t.projectId);
                    return `
                        <tr class="hover:bg-slate-50 transition border-b border-slate-100">
                            <td class="p-3 font-mono font-bold text-slate-800">${t.receiptNo}</td>
                            <td class="p-3 text-slate-600">${t.date}</td>
                            <td class="p-3">
                                <span class="px-2 py-0.5 rounded font-bold text-[10px] ${t.type === 'INCOME' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
                                    ${t.type === 'INCOME' ? 'مدخول' : 'مصروف'}
                                </span>
                            </td>
                            <td class="p-3 font-semibold text-slate-700">${prj ? prj.name : 'عام'}</td>
                            <td class="p-3">
                                <div class="font-bold text-slate-800">${t.party}</div>
                                <div class="text-[10px] text-slate-400">${t.reason || t.category}</div>
                            </td>
                            <td class="p-3 text-slate-500">${t.method}</td>
                            <td class="p-3 font-extrabold text-sm ${t.type === 'INCOME' ? 'text-emerald-700' : 'text-rose-600'}">
                                ${Number(t.amount).toLocaleString()} د.م.
                            </td>
                            <td class="p-3 text-slate-600">${t.receiver}</td>
                            <td class="p-3 text-center whitespace-nowrap space-x-1 space-x-reverse">
                                <button type="button" onclick="viewReceipt('${t.id}')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-1 rounded font-bold border border-slate-300 cursor-pointer">
                                    <i class="fa-solid fa-print"></i> وصل
                                </button>
                                <button type="button" onclick="openUndoTransactionModal('${t.id}')" title="تراجع أو مسح العملية" class="bg-rose-50 hover:bg-rose-100 text-rose-700 px-2 py-1 rounded font-bold border border-rose-200 cursor-pointer">
                                    <i class="fa-solid fa-rotate-left"></i> تراجع
                                </button>
                            </td>
                        </tr>
                    `;
                }).join('')
                : '<tr><td colspan="9" class="p-6 text-center text-slate-400">لا توجد معاملات مطابقة للبحث أو التصفية.</td></tr>';
        }

        function openUndoTransactionModal(trxId) {
            const trx = appData.transactions.find(t => t.id === trxId);
            if (!trx) return;
            const prj = appData.projects.find(p => p.id === trx.projectId);
            document.getElementById('undo-trx-id').value = trx.id;
            document.getElementById('undo-trx-reason').value = '';
            document.getElementById('undo-trx-summary').innerHTML = `
                <div>رقم الوصل: <span class="font-mono">${trx.receiptNo}</span></div>
                <div>النوع: <span>${trx.type === 'INCOME' ? 'مدخول' : 'مصروف'}</span> | المبلغ: <span class="text-rose-700">${Number(trx.amount).toLocaleString()} د.م.</span></div>
                <div>المشروع: <span>${prj ? prj.name : 'عام'}</span> | الطرف: <span>${trx.party}</span></div>
            `;
            openModal('modalConfirmUndoTrx');
        }

        function executeUndoTransaction() {
            const trxId = document.getElementById('undo-trx-id').value;
            const reason = document.getElementById('undo-trx-reason').value.trim();
            const idx = appData.transactions.findIndex(t => t.id === trxId);
            if (idx === -1) return;

            const removed = appData.transactions[idx];
            appData.transactions.splice(idx, 1);

            const detailMsg = `تراجع ومسح عملية (${removed.receiptNo}) بقيمة ${removed.amount} د.م. (${removed.party})${reason ? ' - السبب: ' + reason : ''}`;
            logAudit("تراجع / مسح عملية", detailMsg);
            saveState();
            closeModal('modalConfirmUndoTrx');
            renderAll();
            showToast("تم التراجع عن العملية ومسحها وإعادة احتساب الأرصدة");
        }

        function renderCustody() {
            let presIn = 0, presOut = 0;
            let treasIn = 0, treasOut = 0;

            appData.transactions.forEach(t => {
                if (String(t.receiver || '').includes("الرئيس")) {
                    if (t.type === 'INCOME') presIn += Number(t.amount);
                    if (t.type === 'EXPENSE') presOut += Number(t.amount);
                } else if (String(t.receiver || '').includes("أمين المال")) {
                    if (t.type === 'INCOME') treasIn += Number(t.amount);
                    if (t.type === 'EXPENSE') treasOut += Number(t.amount);
                }
            });

            const presBalance = presIn - presOut;
            const treasBalance = treasIn - treasOut;

            document.getElementById('custody-box-president').textContent = presBalance.toLocaleString() + ' د.م.';
            document.getElementById('custody-pres-in').textContent = presIn.toLocaleString() + ' د.م.';
            document.getElementById('custody-pres-out').textContent = presOut.toLocaleString() + ' د.م.';

            document.getElementById('custody-box-treasurer').textContent = treasBalance.toLocaleString() + ' د.م.';
            document.getElementById('custody-treas-in').textContent = treasIn.toLocaleString() + ' د.م.';
            document.getElementById('custody-treas-out').textContent = treasOut.toLocaleString() + ' د.م.';

            document.getElementById('kpi-custody-president').textContent = presBalance.toLocaleString() + ' د.م.';
            document.getElementById('kpi-custody-treasurer').textContent = treasBalance.toLocaleString() + ' د.م.';

            const tbody = document.getElementById('advances-table-body');
            tbody.innerHTML = appData.advances.length
                ? appData.advances.map(a => {
                    const prj = appData.projects.find(p => p.id === a.projectId);
                    const remaining = Math.max(0, Number(a.amount) - Number(a.paidAmount));
                    return `
                        <tr class="hover:bg-slate-50 border-b border-slate-100">
                            <td class="p-2.5 font-bold text-slate-800">${a.creditor}</td>
                            <td class="p-2.5 text-slate-700">${prj ? prj.name : 'عام'}</td>
                            <td class="p-2.5 text-slate-600">${a.reason}</td>
                            <td class="p-2.5 text-slate-500">${a.date}</td>
                            <td class="p-2.5 font-bold text-slate-800">${Number(a.amount).toLocaleString()} د.م.</td>
                            <td class="p-2.5 text-emerald-700">${Number(a.paidAmount).toLocaleString()} د.م.</td>
                            <td class="p-2.5 font-extrabold ${remaining > 0 ? 'text-rose-600' : 'text-slate-400'}">${remaining.toLocaleString()} د.م.</td>
                            <td class="p-2.5 text-center">
                                ${remaining > 0
                                    ? `<button type="button" onclick="settleAdvance('${a.id}')" class="bg-amber-100 hover:bg-amber-200 text-amber-800 font-bold px-2 py-1 rounded text-[11px] cursor-pointer">تصفية الدين</button>`
                                    : '<span class="text-emerald-600 font-bold"><i class="fa-solid fa-check-double"></i> مسدد</span>'}
                            </td>
                        </tr>
                    `;
                }).join('')
                : '<tr><td colspan="8" class="p-4 text-center text-slate-400">لا توجد سلف أو ديون مسجلة حالياً.</td></tr>';
        }

        function settleAdvance(advanceId) {
            const adv = appData.advances.find(a => a.id === advanceId);
            if (!adv) return;
            const rem = Math.max(0, Number(adv.amount) - Number(adv.paidAmount));
            if (rem <= 0) return;

            adv.paidAmount = adv.amount;
            appData.transactions.unshift({
                id: "TRX-" + Math.floor(Math.random() * 8999 + 1000),
                receiptNo: "EXP-2026-S" + String(appData.transactions.length + 1).padStart(2, '0'),
                date: new Date().toISOString().split('T')[0],
                type: "EXPENSE",
                projectId: adv.projectId || (appData.projects[0] && appData.projects[0].id) || '',
                category: "مصاريف إدارية",
                party: adv.creditor,
                amount: rem,
                method: "نقداً (كاش)",
                receiver: adv.creditor,
                reason: `تصفية سلفة شخصية مستحقة: ${adv.reason}`
            });
            logAudit("تصفية دين", `تسديد السلفة المستحقة لـ ${adv.creditor} بمبلغ ${rem} د.م.`);
            saveState();
            renderAll();
            showToast("تمت تصفية السلفة وتسجيلها ضمن المصاريف");
        }

        function renderResidents() {
            const duesContainer = document.getElementById('dues-cards-container');
            duesContainer.innerHTML = appData.dues.map(d => {
                const records = appData.dueRecords.filter(rec => rec.dueId === d.id);
                const reqSum = records.reduce((s, r) => s + (Number(r.requiredAmount) || 0), 0);
                const paidSum = records.reduce((s, r) => s + (Number(r.paidAmount) || 0), 0);
                const periodLabel = d.periodType === 'OLD' ? 'واجب سابق / قديم' : 'واجب جاري / حالي';
                const statusLabel = d.status === 'CLOSED' ? 'مغلق' : 'مفتوح';

                return `
                    <div class="bg-amber-50 border border-amber-200 p-4 rounded-xl space-y-2">
                        <div class="flex justify-between items-start gap-2">
                            <h4 class="font-bold text-amber-900 text-xs">${d.title}</h4>
                            <div class="flex items-center gap-1.5 shrink-0">
                                <span class="bg-amber-200 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap">${periodLabel} • ${statusLabel}</span>
                                <button type="button" onclick="deleteDueById('${d.id}')" title="مسح الواجب" class="bg-rose-100 hover:bg-rose-200 text-rose-700 px-2 py-0.5 rounded text-[10px] font-bold transition cursor-pointer">
                                    <i class="fa-solid fa-trash"></i> مسح
                                </button>
                            </div>
                        </div>
                        <div class="flex justify-between items-baseline">
                            <p class="text-xl font-extrabold text-amber-800">${Number(d.amount).toLocaleString()} د.م.</p>
                            <span class="text-[11px] text-amber-900 font-semibold">محصل: ${paidSum.toLocaleString()} / ${reqSum.toLocaleString()} د.م.</span>
                        </div>
                        <div class="pt-1 flex justify-between items-center text-[11px]">
                            <span class="text-amber-700">احتساب ${d.calcType}</span>
                            <button type="button" onclick="selectDueInArchive('${d.id}')" class="text-emerald-800 hover:underline font-bold cursor-pointer">
                                عرض أرشيف الواجب ←
                            </button>
                        </div>
                    </div>
                `;
            }).join('');

            renderDueArchive();
            renderImportedBatches();

            const searchVal = (document.getElementById('resident-search-input').value || '').toLowerCase();
            const tbody = document.getElementById('residents-table-body');
            const filtered = appData.residents.filter(r =>
                !searchVal || r.headName.toLowerCase().includes(searchVal) || String(r.familyId).toLowerCase().includes(searchVal)
            );

            tbody.innerHTML = filtered.length
                ? filtered.map(r => {
                    const remaining = Math.max(0, Number(r.duesTotal) - Number(r.duesPaid));
                    let statusBadge = '<span class="bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded text-[10px]">غير مسدد</span>';
                    if (remaining === 0) {
                        statusBadge = '<span class="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">مسدد بالكامل</span>';
                    } else if (Number(r.duesPaid) > 0) {
                        statusBadge = '<span class="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded text-[10px]">مسدد جزئياً</span>';
                    }

                    return `
                        <tr class="hover:bg-slate-50 border-b border-slate-100">
                            <td class="p-3 font-mono font-bold text-slate-700">${r.familyId}</td>
                            <td class="p-3 font-bold text-slate-800">${r.headName}</td>
                            <td class="p-3 text-slate-500">${r.region}</td>
                            <td class="p-3">${r.membersCount} أفراد</td>
                            <td class="p-3 font-bold text-slate-800">${Number(r.duesTotal).toLocaleString()} د.م.</td>
                            <td class="p-3 text-emerald-700 font-bold">${Number(r.duesPaid).toLocaleString()} د.م.</td>
                            <td class="p-3 font-extrabold ${remaining > 0 ? 'text-rose-600' : 'text-slate-400'}">${remaining.toLocaleString()} د.م.</td>
                            <td class="p-3">${statusBadge}</td>
                            <td class="p-3 text-center whitespace-nowrap space-x-1 space-x-reverse">
                                <button type="button" onclick="openResidentDuesCard('${r.id}')" class="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-2.5 py-1 rounded text-[11px] border border-slate-300 cursor-pointer">
                                    <i class="fa-solid fa-eye"></i> اطلاع
                                </button>
                                ${remaining > 0
                                    ? `<button type="button" onclick="openPayDuesModal('${r.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-2.5 py-1 rounded text-[11px] shadow cursor-pointer">أداء دفعة</button>`
                                    : '<i class="fa-solid fa-circle-check text-emerald-600 text-base"></i>'}
                            </td>
                        </tr>
                    `;
                }).join('')
                : '<tr><td colspan="9" class="p-6 text-center text-slate-400">لا توجد أسر مسجلة أو مطابقة للبحث.</td></tr>';
        }

        function selectDueInArchive(dueId) {
            const sel = document.getElementById('archive-due-select');
            if (sel) {
                sel.value = dueId;
                renderDueArchive();
                document.getElementById('dues-archive-section')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }

        function renderDueArchive() {
            const sel = document.getElementById('archive-due-select');
            const summaryEl = document.getElementById('due-archive-summary');
            const tbody = document.getElementById('due-archive-table-body');
            const toggleBtn = document.getElementById('btn-toggle-due-status');
            const deleteBtn = document.getElementById('btn-delete-due-archive');
            const exportBtn = document.getElementById('btn-export-due-archive');
            if (!sel || !summaryEl || !tbody) return;

            const prevSelected = sel.value;
            sel.innerHTML = '<option value="">-- اختر واجباً أو مساهمة لعرض أرشيفها --</option>';
            appData.dues.forEach(d => {
                const tag = d.periodType === 'OLD' ? 'قديم/سابق' : 'حالي';
                const opt = document.createElement('option');
                opt.value = d.id;
                opt.textContent = `${d.title} (${tag} - ${Number(d.amount).toLocaleString()} د.م.)`;
                sel.appendChild(opt);
            });

            if (prevSelected && appData.dues.some(d => d.id === prevSelected)) {
                sel.value = prevSelected;
            } else if (appData.dues.length > 0) {
                sel.value = appData.dues[0].id;
            }

            const due = appData.dues.find(d => d.id === sel.value);
            if (!due) {
                toggleBtn?.classList.add('hidden');
                deleteBtn?.classList.add('hidden');
                exportBtn?.classList.add('hidden');
                summaryEl.innerHTML = '';
                tbody.innerHTML = '<tr><td colspan="8" class="p-4 text-center text-slate-400">لا توجد واجبات أو مساهمات مسجلة حالياً.</td></tr>';
                return;
            }

            toggleBtn?.classList.remove('hidden');
            deleteBtn?.classList.remove('hidden');
            exportBtn?.classList.remove('hidden');
            if (toggleBtn) {
                toggleBtn.textContent = due.status === 'CLOSED' ? 'إعادة فتح الواجب' : 'إغلاق الواجب في الأرشيف';
            }

            const records = appData.dueRecords.filter(rec => rec.dueId === due.id);
            const totalReq = records.reduce((s, r) => s + (Number(r.requiredAmount) || 0), 0);
            const totalPaid = records.reduce((s, r) => s + (Number(r.paidAmount) || 0), 0);
            const totalRem = Math.max(0, totalReq - totalPaid);
            const paidCount = records.filter(r => Math.max(0, Number(r.requiredAmount) - Number(r.paidAmount)) === 0).length;
            const rate = totalReq > 0 ? Math.round((totalPaid / totalReq) * 100) : 0;

            summaryEl.innerHTML = `
                <div class="bg-slate-50 border rounded-lg p-2.5">
                    <span class="text-slate-500 block">المطلوب الكلي للواجب</span>
                    <strong class="text-slate-800 text-sm">${totalReq.toLocaleString()} د.م.</strong>
                </div>
                <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5">
                    <span class="text-emerald-700 block">المحصل في هذا الواجب (${rate}%)</span>
                    <strong class="text-emerald-800 text-sm">${totalPaid.toLocaleString()} د.م.</strong>
                </div>
                <div class="bg-rose-50 border border-rose-200 rounded-lg p-2.5">
                    <span class="text-rose-700 block">المتبقي غير المحصل</span>
                    <strong class="text-rose-700 text-sm">${totalRem.toLocaleString()} د.م.</strong>
                </div>
                <div class="bg-amber-50 border border-amber-200 rounded-lg p-2.5">
                    <span class="text-amber-800 block">المسددون بالكامل</span>
                    <strong class="text-amber-900 text-sm">${paidCount} / ${records.length}</strong>
                </div>
            `;

            const rowsHtml = records.map(rec => {
                const res = appData.residents.find(r => r.id === rec.residentId);
                if (!res) return '';
                const reqAmt = Number(rec.requiredAmount) || 0;
                const paidAmt = Number(rec.paidAmount) || 0;
                const remAmt = Math.max(0, reqAmt - paidAmt);

                let badge = '<span class="bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded text-[10px]">غير مسدد</span>';
                if (remAmt === 0) badge = '<span class="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">مسدد بالكامل</span>';
                else if (paidAmt > 0) badge = '<span class="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded text-[10px]">مسدد جزئياً</span>';

                const paymentsText = Array.isArray(rec.payments) && rec.payments.length > 0
                    ? rec.payments.map(p => `${p.date}: ${Number(p.amount).toLocaleString()} د.م. (${p.receiptNo || ''})`).join(' | ')
                    : 'لا توجد دفعات';

                return `
                    <tr class="hover:bg-slate-50">
                        <td class="p-2.5 font-bold text-slate-800">${res.headName} <span class="font-mono text-[10px] text-slate-400">(${res.familyId})</span></td>
                        <td class="p-2.5 text-slate-500">${res.region || '--'}</td>
                        <td class="p-2.5 font-bold text-slate-800">${reqAmt.toLocaleString()} د.م.</td>
                        <td class="p-2.5 font-bold text-emerald-700">${paidAmt.toLocaleString()} د.م.</td>
                        <td class="p-2.5 font-extrabold ${remAmt > 0 ? 'text-rose-600' : 'text-slate-400'}">${remAmt.toLocaleString()} د.م.</td>
                        <td class="p-2.5">${badge}</td>
                        <td class="p-2.5 text-[10px] text-slate-600">${paymentsText}</td>
                        <td class="p-2.5 text-center">
                            ${remAmt > 0
                                ? `<button type="button" onclick="openPayDuesModal('${res.id}', '${due.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-2 py-1 rounded text-[10px] cursor-pointer">أداء</button>`
                                : '<i class="fa-solid fa-check text-emerald-600"></i>'}
                        </td>
                    </tr>
                `;
            }).join('');

            tbody.innerHTML = rowsHtml || '<tr><td colspan="8" class="p-4 text-center text-slate-400">لا توجد سجلات أسر مرتبطة بهذا الواجب حالياً.</td></tr>';
        }

        function toggleDueArchiveStatus() {
            const dueId = document.getElementById('archive-due-select')?.value;
            const due = appData.dues.find(d => d.id === dueId);
            if (!due) return;
            due.status = due.status === 'CLOSED' ? 'OPEN' : 'CLOSED';
            logAudit("تحديث واجب", `تغيير حالة الواجب (${due.title}) إلى ${due.status}`);
            saveState();
            renderResidents();
            showToast("تم تحديث حالة الواجب في الأرشيف");
        }

        function deleteDueById(dueId) {
            const dueIndex = appData.dues.findIndex(d => d.id === dueId);
            if (dueIndex === -1) return;
            const due = appData.dues[dueIndex];

            const relatedRecords = appData.dueRecords.filter(rec => rec.dueId === due.id);
            const paidSum = relatedRecords.reduce((sum, rec) => sum + (Number(rec.paidAmount) || 0), 0);
            const hasPayments = paidSum > 0 || relatedRecords.some(rec => Array.isArray(rec.payments) && rec.payments.length > 0);

            const warningMsg = hasPayments
                ? `تنبيه: تم تسجيل دفعات مؤداة بقيمة (${paidSum.toLocaleString()} د.م.) ضمن هذا الواجب.\nهل أنت متأكد من مسح/حذف الواجب "${due.title}" وإزالة استحقاقاته؟`
                : `هل أنت متأكد من مسح/حذف الواجب "${due.title}" وإزالة استحقاقاته المرتبطة؟`;

            if (!confirm(warningMsg)) return;

            const affectedResidentIds = relatedRecords.map(rec => rec.residentId);
            appData.dues.splice(dueIndex, 1);
            appData.dueRecords = appData.dueRecords.filter(rec => rec.dueId !== due.id);

            [...new Set(affectedResidentIds)].forEach(resId => {
                const remainingForRes = appData.dueRecords.filter(rec => rec.residentId === resId);
                if (remainingForRes.length > 0) {
                    recalculateResidentDuesTotals(resId);
                } else {
                    const resObj = appData.residents.find(r => r.id === resId);
                    if (resObj) {
                        resObj.duesTotal = 0;
                        resObj.duesPaid = 0;
                    }
                }
            });

            logAudit("مسح واجب جماعي", `حذف الواجب (${due.title})`);
            saveState();
            renderAll();
            showToast("تم مسح الواجب وتحديث استحقاقات الساكنة");
        }

        function deleteSelectedDueArchive() {
            const dueId = document.getElementById('archive-due-select')?.value;
            if (!dueId) return;
            deleteDueById(dueId);
        }

        function exportSelectedDueArchiveExcel() {
            const dueId = document.getElementById('archive-due-select')?.value;
            const due = appData.dues.find(d => d.id === dueId);
            if (!due) return;

            const rows = appData.dueRecords
                .filter(rec => rec.dueId === due.id)
                .map(rec => {
                    const res = appData.residents.find(r => r.id === rec.residentId) || {};
                    const reqAmt = Number(rec.requiredAmount) || 0;
                    const paidAmt = Number(rec.paidAmount) || 0;
                    const remAmt = Math.max(0, reqAmt - paidAmt);
                    return {
                        'الواجب': due.title,
                        'رقم الأسرة': res.familyId || '',
                        'رب الأسرة': res.headName || '',
                        'المنطقة': res.region || '',
                        'المطلوب': reqAmt,
                        'المؤدى': paidAmt,
                        'المتبقي': remAmt,
                        'الحالة': remAmt === 0 ? 'مسدد بالكامل' : (paidAmt > 0 ? 'مسدد جزئياً' : 'غير مسدد')
                    };
                });

            downloadRowsAsExcelOrCsv(rows, `أرشيف_واجب_${due.title.replace(/\s+/g, '_')}`, 'أرشيف الواجب');
            showToast("تم تصدير أرشيف الواجب بنجاح");
        }

        function renderImportedBatches() {
            const card = document.getElementById('imported-batches-card');
            const list = document.getElementById('imported-batches-list');
            if (!card || !list) return;
            if (!appData.importedResidentBatches.length) {
                card.classList.add('hidden');
                return;
            }
            card.classList.remove('hidden');
            list.innerHTML = appData.importedResidentBatches.map(b => `
                <span class="bg-slate-100 border border-slate-300 text-slate-700 px-2.5 py-1 rounded-lg">
                    <i class="fa-solid fa-file-check text-emerald-600 ml-1"></i>
                    <strong>${b.fileName}</strong> (${b.importedAt} • ${b.count} أسرة)
                </span>
            `).join('');
        }

        function openResidentDuesCard(resId) {
            const res = appData.residents.find(r => r.id === resId);
            if (!res) return;

            document.getElementById('res-card-subtitle').textContent =
                `رب الأسرة: ${res.headName} | رقم الأسرة: ${res.familyId} | المنطقة: ${res.region || '--'} | الأفراد: ${res.membersCount}`;

            const records = appData.dueRecords.filter(rec => rec.residentId === res.id);
            const totalReq = records.length > 0 ? records.reduce((s, r) => s + (Number(r.requiredAmount) || 0), 0) : Number(res.duesTotal) || 0;
            const totalPaid = records.length > 0 ? records.reduce((s, r) => s + (Number(r.paidAmount) || 0), 0) : Number(res.duesPaid) || 0;
            const totalRem = Math.max(0, totalReq - totalPaid);

            document.getElementById('res-card-totals').innerHTML = `
                <div class="bg-slate-50 border rounded-lg p-2.5">
                    <span class="text-slate-500 block">إجمالي المستحقات</span>
                    <strong class="text-slate-800 text-sm">${totalReq.toLocaleString()} د.م.</strong>
                </div>
                <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5">
                    <span class="text-emerald-700 block">إجمالي المؤدى</span>
                    <strong class="text-emerald-800 text-sm">${totalPaid.toLocaleString()} د.م.</strong>
                </div>
                <div class="bg-rose-50 border border-rose-200 rounded-lg p-2.5">
                    <span class="text-rose-700 block">المتبقي في الذمة</span>
                    <strong class="text-rose-700 text-sm">${totalRem.toLocaleString()} د.م.</strong>
                </div>
            `;

            const tbody = document.getElementById('res-card-dues-tbody');
            if (!records.length) {
                tbody.innerHTML = `
                    <tr class="hover:bg-slate-50">
                        <td class="p-2.5 font-bold text-slate-800">الرصيد السابق / الإجمالي</td>
                        <td class="p-2.5 text-slate-600">مسجل</td>
                        <td class="p-2.5 font-bold">${totalReq.toLocaleString()} د.م.</td>
                        <td class="p-2.5 font-bold text-emerald-700">${totalPaid.toLocaleString()} د.م.</td>
                        <td class="p-2.5 font-extrabold ${totalRem > 0 ? 'text-rose-600' : 'text-slate-400'}">${totalRem.toLocaleString()} د.م.</td>
                        <td class="p-2.5">${totalRem === 0 ? '<span class="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">مسدد بالكامل</span>' : '<span class="bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded text-[10px]">غير مسدد</span>'}</td>
                        <td class="p-2.5 text-center">
                            ${totalRem > 0 ? `<button type="button" onclick="closeModal('modalResidentDuesCard'); openPayDuesModal('${res.id}');" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-2 py-1 rounded text-[10px] cursor-pointer">أداء</button>` : '<i class="fa-solid fa-check text-emerald-600"></i>'}
                        </td>
                    </tr>
                `;
            } else {
                tbody.innerHTML = records.map(rec => {
                    const due = appData.dues.find(d => d.id === rec.dueId) || { title: 'واجب مسجل', periodType: 'CURRENT' };
                    const reqAmt = Number(rec.requiredAmount) || 0;
                    const paidAmt = Number(rec.paidAmount) || 0;
                    const remAmt = Math.max(0, reqAmt - paidAmt);
                    const periodLabel = due.periodType === 'OLD' ? 'سابق / قديم' : 'حالي';

                    let st = '<span class="bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded text-[10px]">غير مسدد</span>';
                    if (remAmt === 0) st = '<span class="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">مسدد بالكامل</span>';
                    else if (paidAmt > 0) st = '<span class="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded text-[10px]">مسدد جزئياً</span>';

                    return `
                        <tr class="hover:bg-slate-50">
                            <td class="p-2.5 font-bold text-slate-800">${due.title}</td>
                            <td class="p-2.5 text-slate-600">${periodLabel}</td>
                            <td class="p-2.5 font-bold">${reqAmt.toLocaleString()} د.م.</td>
                            <td class="p-2.5 font-bold text-emerald-700">${paidAmt.toLocaleString()} د.م.</td>
                            <td class="p-2.5 font-extrabold ${remAmt > 0 ? 'text-rose-600' : 'text-slate-400'}">${remAmt.toLocaleString()} د.م.</td>
                            <td class="p-2.5">${st}</td>
                            <td class="p-2.5 text-center">
                                ${remAmt > 0 ? `<button type="button" onclick="closeModal('modalResidentDuesCard'); openPayDuesModal('${res.id}', '${rec.dueId}');" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-2 py-1 rounded text-[10px] cursor-pointer">أداء</button>` : '<i class="fa-solid fa-check text-emerald-600"></i>'}
                            </td>
                        </tr>
                    `;
                }).join('');
            }

            openModal('modalResidentDuesCard');
        }

        function openPayDuesModal(resId, specificDueId = null) {
            const res = appData.residents.find(r => r.id === resId);
            if (!res) return;

            document.getElementById('pay-dues-res-id').value = res.id;
            document.getElementById('pay-dues-head').textContent = `${res.headName} (${res.familyId})`;

            let remaining = Math.max(0, Number(res.duesTotal) - Number(res.duesPaid));
            let titleText = "الرصيد الإجمالي للواجبات";

            if (specificDueId) {
                const rec = appData.dueRecords.find(r => r.residentId === res.id && r.dueId === specificDueId);
                const due = appData.dues.find(d => d.id === specificDueId);
                if (rec) {
                    remaining = Math.max(0, Number(rec.requiredAmount) - Number(rec.paidAmount));
                    titleText = due ? due.title : "واجب محدد";
                }
            }

            document.getElementById('pay-dues-due-id').value = specificDueId || '';
            document.getElementById('pay-dues-title').textContent = titleText;
            document.getElementById('pay-dues-remaining').textContent = `${remaining.toLocaleString()} د.م.`;
            const amtInput = document.getElementById('pay-dues-amount');
            amtInput.max = remaining;
            amtInput.value = remaining;
            openModal('modalPayDues');
        }

        function handlePayDuesSubmit(e) {
            e.preventDefault();
            const resId = document.getElementById('pay-dues-res-id').value;
            const specificDueId = document.getElementById('pay-dues-due-id').value;
            const res = appData.residents.find(r => r.id === resId);
            if (!res) return;

            const payVal = parseFloat(document.getElementById('pay-dues-amount').value);
            if (isNaN(payVal) || payVal <= 0) {
                showToast("يرجى إدخال مبلغ صحيح", true);
                return;
            }

            const receiptNo = "REC-DUES-" + String(appData.transactions.length + 1).padStart(3, '0');
            const payDate = new Date().toISOString().split('T')[0];

            if (specificDueId) {
                const rec = appData.dueRecords.find(r => r.residentId === res.id && r.dueId === specificDueId);
                if (!rec) return;
                const rem = Math.max(0, Number(rec.requiredAmount) - Number(rec.paidAmount));
                if (payVal > rem) {
                    showToast("المبلغ يتجاوز المتبقي لهذا الواجب", true);
                    return;
                }
                rec.paidAmount = Number(rec.paidAmount) + payVal;
                if (!Array.isArray(rec.payments)) rec.payments = [];
                rec.payments.push({ date: payDate, amount: payVal, receiptNo });
                recalculateResidentDuesTotals(res.id);
            } else {
                const remaining = Math.max(0, Number(res.duesTotal) - Number(res.duesPaid));
                if (payVal > remaining) {
                    showToast("يرجى إدخال مبلغ صحيح لا يتجاوز المتبقي", true);
                    return;
                }
                let leftToAllocate = payVal;
                const records = appData.dueRecords.filter(r => r.residentId === res.id);
                records.forEach(rec => {
                    if (leftToAllocate <= 0) return;
                    const recRem = Math.max(0, Number(rec.requiredAmount) - Number(rec.paidAmount));
                    if (recRem > 0) {
                        const alloc = Math.min(recRem, leftToAllocate);
                        rec.paidAmount = Number(rec.paidAmount) + alloc;
                        if (!Array.isArray(rec.payments)) rec.payments = [];
                        rec.payments.push({ date: payDate, amount: alloc, receiptNo });
                        leftToAllocate -= alloc;
                    }
                });
                if (records.length > 0) {
                    recalculateResidentDuesTotals(res.id);
                } else {
                    res.duesPaid = Number(res.duesPaid) + payVal;
                }
            }

            const targetDue = appData.dues.find(d => d.id === specificDueId) || appData.dues[0];
            const targetProj = (targetDue && targetDue.targetProjectId) || (appData.projects[0] && appData.projects[0].id) || '';

            appData.transactions.unshift({
                id: "TRX-" + Math.floor(Math.random() * 8999 + 1000),
                receiptNo,
                date: payDate,
                type: "INCOME",
                projectId: targetProj,
                category: "مساهمة ساكنة",
                party: res.headName,
                amount: payVal,
                method: "نقداً (كاش)",
                receiver: appData.currentUser,
                reason: targetDue ? `أداء واجب: ${targetDue.title}` : "أداء واجب جماعي"
            });

            logAudit("أداء واجب جماعي", `دفعة بقيمة ${payVal} د.م. من ${res.headName}`);
            saveState();
            closeModal('modalPayDues');
            renderAll();
            showToast("تم تسجيل دفعة الواجب وتحديث الأرشيف بنجاح");
        }

        function calculateWaterPreview() {
            const subId = document.getElementById('water-subscriber-select').value;
            const sub = appData.subscribers.find(s => s.id === subId);
            const tariff = Number(appData.settings.waterTariff || 5);
            const tariffEl = document.getElementById('calc-tariff-label');
            if (tariffEl) tariffEl.textContent = `${tariff.toFixed(2)} د.م. / م³`;

            if (!sub) {
                document.getElementById('water-prev-val').value = 0;
                document.getElementById('calc-consumption').textContent = '0 م³';
                document.getElementById('calc-total-bill').textContent = '0.00 د.م.';
                return;
            }
            document.getElementById('water-prev-val').value = sub.lastReading;
            const currVal = parseFloat(document.getElementById('water-curr-val').value);
            if (!isNaN(currVal) && currVal >= sub.lastReading) {
                const cons = currVal - sub.lastReading;
                document.getElementById('calc-consumption').textContent = `${cons} م³`;
                const connection=sub.connectionFeePaid?0:Number(appData.settings.waterConnectionFee||0),other=Number(appData.settings.waterOtherFee||0);
                document.getElementById('calc-total-bill').textContent = `${(cons * tariff + connection + other).toFixed(2)} د.م.`;
            } else {
                document.getElementById('calc-consumption').textContent = '0 م³';
                document.getElementById('calc-total-bill').textContent = '0.00 د.م.';
            }
        }

        function generateSubscriberAccessCode() {
            const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
            let code = 'EDZ-';
            for (let i = 0; i < 8; i++) code += chars[Math.floor(Math.random() * chars.length)];
            return code;
        }

        function ensureSubscriberAccessCodes() {
            let changed = false;
            (appData.subscribers || []).forEach(sub => {
                if (!sub.accessCode) { sub.accessCode = generateSubscriberAccessCode(); changed = true; }
                if (sub.accessCodeActive === undefined) { sub.accessCodeActive = true; changed = true; }
            });
            if (changed) saveState();
        }

        function showPortalPanel(which) {
            ['portalHome','officeLoginPanel','subscriberLoginPanel','subscriberPortalPanel'].forEach(id=>document.getElementById(id)?.classList.remove('active'));
            const map={home:'portalHome',office:'officeLoginPanel',subscriber:'subscriberLoginPanel'};
            if(map[which]) document.getElementById(map[which]).classList.add('active');
        }
        function renderSubscriberCodes(){
            ensureSubscriberAccessCodes();
            const body=document.getElementById('subscriber-codes-tbody'); if(!body)return;
            body.innerHTML=(appData.subscribers||[]).map(sub=>`<tr class="border-b"><td class="p-2 font-bold">${escapeDocText(sub.name)}</td><td class="p-2">${escapeDocText(sub.meterNo||'--')}</td><td class="p-2"><div>${escapeDocText(sub.phone||'--')}</div><small class="${sub.whatsappConsent?'text-green-700':'text-slate-400'}">${sub.whatsappConsent?'موافق على الإشعارات':'لا توجد موافقة مسجلة'}</small></td><td class="p-2"><span class="code-pill">${escapeDocText(sub.accessCode||'--')}</span></td><td class="p-2">${sub.accessCodeActive===false?'<span class="text-rose-600 font-bold">موقوف</span>':'<span class="text-emerald-700 font-bold">نشط</span>'}</td><td class="p-2 whitespace-nowrap"><button onclick="editWaterSubscriber('${sub.id}')" class="px-2 py-1 rounded bg-sky-100 text-sky-900">تعديل البيانات</button> <button onclick="editSubscriberWhatsApp('${sub.id}')" class="px-2 py-1 rounded bg-green-100 text-green-900">الهاتف والموافقة</button> <button onclick="toggleSubscriberCode('${sub.id}')" class="px-2 py-1 rounded bg-amber-100 text-amber-900">${sub.accessCodeActive===false?'تفعيل':'إيقاف'}</button> <button onclick="regenerateSubscriberCode('${sub.id}')" class="px-2 py-1 rounded bg-slate-100">تجديد</button> <button onclick="copySubscriberCode('${sub.id}')" class="px-2 py-1 rounded bg-emerald-100 text-emerald-900">نسخ</button></td></tr>`).join('') || '<tr><td colspan="6" class="p-4 text-center text-slate-400">لا يوجد مشتركون بعد</td></tr>';
        }
        function editWaterSubscriber(id){if(isWaterReaderSession())return;const sub=appData.subscribers.find(x=>x.id===id);if(!sub)return;const name=prompt('الاسم الكامل للمشترك:',sub.name||'');if(name===null)return;const meter=prompt('رقم العداد:',sub.meterNo||'');if(meter===null)return;const reading=prompt('آخر قراءة معتمدة (م³):',String(sub.lastReading||0));if(reading===null)return;const n=Number(reading);if(!name.trim()||!meter.trim()||!Number.isFinite(n)||n<0)return showToast('تحقق من الاسم ورقم العداد والقراءة',true);if(appData.subscribers.some(x=>x.id!==id&&x.meterNo===meter.trim()))return showToast('رقم العداد مسجل لمشترك آخر',true);const feePaid=prompt('هل سبق أداء واجب الربط؟ اكتب نعم أو لا:',sub.connectionFeePaid?'نعم':'لا');if(feePaid===null)return;const member=prompt('هل المشترك منخرط بالجمعية؟ اكتب نعم أو لا:',sub.isMember?'نعم':'لا');if(member===null)return;sub.isMember=/^(نعم|yes|y|1|true|منخرط|منخرطة)$/i.test(member.trim());sub.connectionFeePaid=/^(نعم|yes|y)$/i.test(feePaid.trim());sub.name=name.trim();sub.meterNo=meter.trim();sub.lastReading=n;logAudit('تعديل بيانات مشترك ماء',`${sub.name}؛ العداد ${sub.meterNo}`);saveState();renderWater();showToast('تم تحديث بيانات المشترك');}

        function editSubscriberWhatsApp(id) {
            const sub = (appData.subscribers || []).find(x => x.id === id);
            if (!sub) return;
            const phone = prompt('أدخل رقم هاتف المشترك بصيغة 06XXXXXXXX أو +2126XXXXXXXX:', sub.phone || '');
            if (phone === null) return;
            const cleanPhone = phone.trim();
            if (cleanPhone && !normalizeMoroccanWhatsAppPhone(cleanPhone)) return showToast('رقم الهاتف غير صالح', true);
            const consent = confirm('هل وافق هذا المشترك على تلقي إشعارات واتساب؟\nاختيار إلغاء يعني عدم تسجيل الموافقة.');
            sub.phone = cleanPhone;
            sub.whatsappConsent = !!consent;
            saveState(); renderSubscriberCodes(); renderWater();
            showToast('تم تحديث رقم الهاتف وحالة الموافقة');
        }
        function toggleSubscriberCode(id){const s=appData.subscribers.find(x=>x.id===id);if(!s)return;s.accessCodeActive=s.accessCodeActive===false;saveState();renderSubscriberCodes();showToast(s.accessCodeActive?'تم تفعيل الرمز':'تم إيقاف الرمز');}
        function regenerateSubscriberCode(id){const s=appData.subscribers.find(x=>x.id===id);if(!s)return;s.accessCode=generateSubscriberAccessCode();s.accessCodeActive=true;saveState();renderSubscriberCodes();showToast('تم إصدار رمز جديد');}
        function copySubscriberCode(id){const s=appData.subscribers.find(x=>x.id===id);if(!s)return;navigator.clipboard?.writeText(s.accessCode).then(()=>showToast('تم نسخ الرمز')).catch(()=>showToast('تعذر النسخ؛ الرمز: '+s.accessCode));}
        function loginSubscriberPortal(){
            ensureSubscriberAccessCodes();const code=(document.getElementById('subscriberAccessInput').value||'').trim().toUpperCase();
            const sub=(appData.subscribers||[]).find(x=>x.accessCode===code&&x.accessCodeActive!==false);const err=document.getElementById('subscriberLoginError');
            if(!sub){err.textContent='رمز الدخول غير صحيح أو موقوف';err.classList.remove('hidden');return;}err.classList.add('hidden');
            document.getElementById('portalHome').classList.remove('active');document.getElementById('subscriberLoginPanel').classList.remove('active');document.getElementById('subscriberPortalPanel').classList.add('active');
            const invoices=(appData.waterInvoices||[]).filter(x=>x.subId===sub.id||x.meterNo===sub.meterNo||x.subName===sub.name);
            document.getElementById('subscriberPortalContent').innerHTML=`<div class="bg-emerald-50 rounded-xl p-3 mb-3"><b>${escapeDocText(sub.name)}</b><div class="text-xs text-slate-600 mt-1">رقم العداد: ${escapeDocText(sub.meterNo||'--')} | القراءة الأخيرة: ${Number(sub.lastReading||0)} م³</div></div><div class="grid grid-cols-2 gap-2 mb-3"><div class="bg-slate-50 p-3 rounded-lg"><small>عدد الفواتير</small><b class="block text-lg">${invoices.length}</b></div><div class="bg-rose-50 p-3 rounded-lg"><small>المبلغ غير المؤدى</small><b class="block text-lg">${invoices.reduce((a,i)=>a+waterInvoiceBalance(i),0).toFixed(2)} د.م.</b></div></div><div class="space-y-2">${invoices.map(i=>`<div class="border rounded-lg p-3"><div class="flex justify-between gap-2"><b>${escapeDocText(i.id)}</b><span class="text-xs ${i.status==='PAID'?'text-emerald-700':'text-rose-600'}">${i.status==='PAID'?'مؤداة':i.status==='PARTIAL'?'أداء جزئي':'غير مؤداة'}</span></div><p class="text-xs text-slate-500">${escapeDocText(i.period||'')} · الاستهلاك ${Number(i.consumption||0)} م³</p><b>${Number(i.total||0).toFixed(2)} درهم</b>${i.status==='PAID'?`<button type="button" onclick="printWaterReceipt('${i.id}')" class="block mt-2 text-xs text-emerald-700 font-bold">تحميل/طباعة وصل الأداء</button>`:''}</div>`).join('')||'<p class="text-center text-slate-400 p-4">لا توجد فواتير مسجلة</p>'}</div>`;
        }
        function subscriberPortalLogout(){document.getElementById('subscriberAccessInput').value='';showPortalPanel('home');}

        function openWaterDocSettings() {
            const st = appData.settings || {};
            document.getElementById('water-doc-invoice-title').value = st.waterInvoiceTitle || 'فاتورة استهلاك الماء';
            document.getElementById('water-doc-receipt-title').value = st.waterReceiptTitle || 'وصل أداء فاتورة الماء';
            document.getElementById('water-doc-footer').value = st.waterDocFooter || 'شكراً لثقتكم وتعاونكم';
            document.getElementById('water-doc-color').value = st.waterDocColor || '#0e7490';
            document.getElementById('water-doc-show-code').checked = st.showSubscriberCodeOnDocs !== false;
            openModal('modalWaterDocSettings');
        }

        function saveWaterDocSettings(e) {
            e.preventDefault(); if(isWaterReaderSession())return showToast('غير مسموح لهذا الحساب',true);
            appData.settings.waterInvoiceTitle = document.getElementById('water-doc-invoice-title').value.trim() || 'فاتورة استهلاك الماء';
            appData.settings.waterReceiptTitle = document.getElementById('water-doc-receipt-title').value.trim() || 'وصل أداء فاتورة الماء';
            appData.settings.waterDocFooter = document.getElementById('water-doc-footer').value.trim();
            appData.settings.waterDocColor = document.getElementById('water-doc-color').value || '#0e7490';
            appData.settings.showSubscriberCodeOnDocs = document.getElementById('water-doc-show-code').checked;
            saveState(); closeModal('modalWaterDocSettings'); showToast('تم حفظ تصميم الفواتير والوصولات');
        }

        function escapeDocText(v) { return String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

        function openWaterPrintDocument(inv, kind) {
            if (!inv) return;
            ensureSubscriberAccessCodes();
            const sub = appData.subscribers.find(x => x.id === inv.subId || x.name === inv.subName || x.meterNo === inv.meterNo);
            const code = sub && sub.accessCodeActive !== false ? sub.accessCode : 'غير متاح';
            const st = appData.settings || {};
            const title = kind === 'invoice' ? (st.waterInvoiceTitle || 'فاتورة استهلاك الماء') : (st.waterReceiptTitle || 'وصل أداء فاتورة الماء');
            const color = st.waterDocColor || '#0e7490';
            const logo = document.querySelector('.login-logo')?.src || '';
            const showCode = st.showSubscriberCodeOnDocs !== false;
            const paid = inv.status === 'PAID';
            const rows = kind === 'invoice' ? `
                <tr><th>الفترة</th><td>${escapeDocText(inv.period)}</td></tr>
                <tr><th>القراءة السابقة</th><td>${escapeDocText(inv.prevReading)} م³</td></tr>
                <tr><th>القراءة الحالية</th><td>${escapeDocText(inv.currReading)} م³</td></tr>
                <tr><th>الاستهلاك</th><td>${escapeDocText(inv.consumption)} م³</td></tr>
                <tr><th>التعرفة</th><td>${Number(inv.tariff || st.waterTariff || 0).toFixed(2)} درهم / م³</td></tr>
                <tr><th>قيمة الاستهلاك</th><td>${Number(inv.consumptionAmount ?? (Number(inv.consumption||0)*Number(inv.tariff||0))).toFixed(2)} درهم</td></tr>
                ${Number(inv.connectionFee||0)>0?`<tr><th>واجب الربط</th><td>${Number(inv.connectionFee).toFixed(2)} درهم</td></tr>`:''}
                ${Number(inv.otherFee||0)>0?`<tr><th>${escapeDocText(inv.otherFeeName||'مصاريف إضافية')}</th><td>${Number(inv.otherFee).toFixed(2)} درهم</td></tr>`:''}` : `
                <tr><th>رقم الفاتورة</th><td>${escapeDocText(inv.paymentInvoiceId||inv.id)}</td></tr>
                <tr><th>تاريخ الأداء</th><td>${escapeDocText(inv.receiptDate||new Date().toISOString().slice(0,10))}</td></tr>
                <tr><th>طريقة الأداء</th><td>${escapeDocText(inv.paymentMethod||'—')}</td></tr>
                <tr><th>مرجع الأداء</th><td>${escapeDocText(inv.paymentNote||'—')}</td></tr>
                <tr><th>حالة الأداء</th><td>تم قبض هذا المبلغ</td></tr>`;
            const win = window.open('', '_blank', 'width=800,height=900');
            if (!win) { showToast('يرجى السماح بفتح نافذة الطباعة'); return; }
            win.document.write(`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>${escapeDocText(title)}</title></head><body>
                <div class="head"><img class="logo" src="${logo}"><div><div class="assoc">${escapeDocText(st.associationName || 'جمعية إدزاح إدبوكا للماء والتنمية')}</div><div class="sub">والثقافة والتضامن الاجتماعي</div></div></div>
                <h1 class="title">${escapeDocText(title)}</h1>
                <table><tr><th>رقم الوثيقة</th><td>${escapeDocText(inv.id)}</td></tr><tr><th>التاريخ</th><td>${escapeDocText(inv.receiptDate||new Date().toISOString().slice(0,10))}</td></tr><tr><th>اسم المشترك</th><td>${escapeDocText(inv.subName)}</td></tr><tr><th>رقم العداد</th><td>${escapeDocText(inv.meterNo)}</td></tr>${rows}</table>
                <div class="amount">${kind === 'invoice' ? 'المبلغ المستحق' : 'المبلغ المؤدى'}: ${Number(inv.total || 0).toFixed(2)} درهم</div>
                ${showCode ? `<div class="code"><b>رمز دخول المشترك:</b> ${escapeDocText(code)}</div>` : ''}
                <div class="sign"><span>توقيع المشترك: ....................</span><span>توقيع وختم الجمعية: ....................</span></div>
                <div class="foot">${escapeDocText(st.waterDocFooter || 'شكراً لثقتكم وتعاونكم')}</div><script>window.onload=()=>window.print();<\/script>

</body></html>`);
            win.document.close();
        }

        function printWaterBatch(kind){
            let list;
            if(kind==='invoice') list=(appData.waterInvoices||[]).slice();
            else if((appData.waterPayments||[]).length){const paymentDocs=(appData.waterPayments||[]).map(p=>{const inv=appData.waterInvoices.find(i=>i.id===p.invoiceId);return inv?{...inv,id:p.receiptNo,paymentInvoiceId:inv.id,total:p.amount,receiptDate:p.date,paymentMethod:p.method,paymentNote:p.note,status:'PAID'}:null;}).filter(Boolean);const legacy=(appData.waterInvoices||[]).filter(i=>i.status==='PAID'&&!(appData.waterPayments||[]).some(p=>p.invoiceId===i.id));list=[...paymentDocs,...legacy];}
            else list=(appData.waterInvoices||[]).filter(x=>x.status==='PAID');
            if(!list.length){showToast('لا توجد وثائق للطباعة');return;}
            const st=appData.settings||{},color=st.waterDocColor||'#166534';
            const logo=document.querySelector('.login-logo')?.src||'';
            const title=kind==='invoice'?(st.waterInvoiceTitle||'فاتورة استهلاك الماء'):(st.waterReceiptTitle||'وصل أداء فاتورة الماء');
            const card=(inv,copy='')=>`<article class="doc"><header><img src="${logo}"><div><b>${escapeDocText(st.associationName||'جمعية إدزاح إدبوكا')}</b><small>والثقافة والتضامن الاجتماعي</small></div><strong>${copy||title}</strong></header><div class="doc-title">${title}</div><div class="line"><span>رقم الوثيقة: ${escapeDocText(inv.id)}</span><span>التاريخ: ${escapeDocText(inv.receiptDate||new Date().toLocaleDateString('ar-MA'))}</span></div><div class="line"><span>المشترك: ${escapeDocText(inv.subName)}</span><span>العداد: ${escapeDocText(inv.meterNo)}</span></div>${kind==='invoice'?`<div class="line"><span>الفترة: ${escapeDocText(inv.period||'')}</span><span>الاستهلاك: ${Number(inv.consumption||0)} م³</span></div><div class="line"><span>القراءة السابقة: ${Number(inv.prevReading||0)}</span><span>الحالية: ${Number(inv.currReading||0)}</span></div>`:`<div class="line"><span>الفاتورة: ${escapeDocText(inv.paymentInvoiceId||inv.id)}</span><span>تاريخ الأداء: ${escapeDocText(inv.receiptDate||'')}</span></div><div class="line"><span>طريقة الأداء: ${escapeDocText(inv.paymentMethod||'')}</span><span>مرجع: ${escapeDocText(inv.paymentNote||'')}</span></div>`}${kind==='invoice'?`<div class="line"><span>قيمة الاستهلاك: ${Number(inv.consumption||0)} × ${Number(inv.tariff||0)} د.م.</span><b>${Number(inv.consumptionAmount ?? (Number(inv.consumption||0)*Number(inv.tariff||0))).toFixed(2)} د.م.</b></div>${Number(inv.connectionFee||0)>0?`<div class="line"><span>واجب الربط</span><b>${Number(inv.connectionFee).toFixed(2)} د.م.</b></div>`:''}${Number(inv.otherFee||0)>0?`<div class="line"><span>${escapeDocText(inv.otherFeeName||'مصاريف إضافية')}</span><b>${Number(inv.otherFee).toFixed(2)} د.م.</b></div>`:''}`:''}<div class="total">${kind==='invoice'?'المبلغ المستحق':'المبلغ المؤدى'}: ${Number(inv.total||0).toFixed(2)} درهم</div><footer>${escapeDocText(st.waterDocFooter||'شكراً لتعاونكم')} <span>توقيع وخاتم الجمعية: ............</span></footer></article>`;
            let pages='';
            if(kind==='invoice'){for(let i=0;i<list.length;i+=2)pages+=`<section class="invoice-page">${card(list[i])}${list[i+1]?card(list[i+1]):'<div></div>'}</section>`;}
            else {for(let i=0;i<list.length;i+=4){pages+=`<section class="receipt-page">${list.slice(i,i+4).map(inv=>`<div class="receipt-pair">${card(inv,'الأصل')}${card(inv,'نسخة الجمعية')}</div>`).join('')}</section>`;}}
            const w=window.open('','_blank');if(!w){showToast('اسمح بفتح نافذة الطباعة');return;}
            w.document.write(`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>${title}</title></head><body>${pages}<script>window.onload=()=>window.print()<\/script>

</body></html>`);w.document.close();
        }

        function printWaterInvoice(id) { openWaterPrintDocument(appData.waterInvoices.find(x => x.id === id), 'invoice'); }
        function printWaterReceipt(id) { const inv=appData.waterInvoices.find(x=>x.id===id);if(!inv||waterInvoicePaid(inv)<=0){showToast('لا يمكن إصدار وصل قبل تسجيل الأداء');return;}const latest=(appData.waterPayments||[]).filter(p=>p.invoiceId===id).sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt)))[0];if(latest)return printWaterPaymentReceipt(id,latest.id);openWaterPrintDocument(inv,'receipt'); }
        function previewWaterDoc() {
            const sample = {id:'WAT-DEMO-001',subName:'اسم المشترك',meterNo:'M-001',period:'نموذج تجريبي',prevReading:100,currReading:120,consumption:20,tariff:5,total:100,status:'PAID'};
            openWaterPrintDocument(sample, 'invoice');
        }

        function toggleWaterInvoices(){
            const panel=document.getElementById('water-invoices-panel');if(!panel)return;
            const opening=panel.classList.contains('hidden');
            panel.classList.toggle('hidden');
            if(opening){
                const content=document.getElementById('water-invoices-content');
                const title=document.getElementById('water-invoices-title-toggle');
                const chevron=document.getElementById('water-invoices-title-chevron');
                if(content)content.classList.remove('hidden');
                if(title)title.setAttribute('aria-expanded','true');
                if(chevron)chevron.className='fa-solid fa-chevron-up text-slate-400 text-xs';
                renderWater();panel.scrollIntoView({behavior:'smooth',block:'start'});
            }
        }

        function toggleWaterInvoicesContent(){
            const content=document.getElementById('water-invoices-content');
            const title=document.getElementById('water-invoices-title-toggle');
            const chevron=document.getElementById('water-invoices-title-chevron');
            if(!content)return;
            const willOpen=content.classList.contains('hidden');
            content.classList.toggle('hidden',!willOpen);
            if(title)title.setAttribute('aria-expanded',String(willOpen));
            if(chevron)chevron.className=(willOpen?'fa-solid fa-chevron-up':'fa-solid fa-chevron-down')+' text-slate-400 text-xs';
            if(willOpen)renderWater();
        }

        function setWaterInvoiceFilter(value){
            const select=document.getElementById('water-filter-status');
            if(select)select.value=value;
            document.querySelectorAll('#water-invoice-filter-chips [data-filter]').forEach(btn=>btn.classList.toggle('active',btn.dataset.filter===value));
            renderWater();
        }

        function renderWater() {
            ensureSubscriberAccessCodes();
            renderWaterAdvancedAuditLog();renderWaterMonthClosures();
            if (!Array.isArray(appData.waterNotifications)) appData.waterNotifications = [];
            (appData.subscribers || []).forEach(sub => { if (typeof sub.phone !== 'string') sub.phone = ''; if (typeof sub.whatsappConsent !== 'boolean') sub.whatsappConsent = false; });
            renderSubscriberCodes();
            const st=appData.settings||{};
            const setValue=(id,v)=>{const el=document.getElementById(id);if(el&&document.activeElement!==el)el.value=v??'';};
            setValue('water-setting-tariff',st.waterTariff??5);setValue('water-setting-connection',st.waterConnectionFee??0);setValue('water-setting-other-name',st.waterOtherFeeName||'مصاريف إضافية');setValue('water-setting-other',st.waterOtherFee??0);
            renderWaterReadings();renderWaterReaderAssignment();renderWaterPaymentsHistory();
            const advMonth=document.getElementById('water-close-month');if(advMonth&&!advMonth.value)advMonth.value=new Date().toISOString().slice(0,7);
            const reportMonth=document.getElementById('water-report-month');if(reportMonth&&!reportMonth.value)reportMonth.value=new Date().toISOString().slice(0,7);renderWaterMonthlyReport();
            const unpaidAmount = appData.waterInvoices.reduce((sum, i) => sum + waterInvoiceBalance(i), 0);
            const waterIncome=(appData.waterPayments||[]).reduce((sum,p)=>sum+Number(p.amount||0),0);
            const waterProjects=(appData.projects||[]).filter(p=>/ماء|بئر|عداد/i.test(String(p.name||'')));
            const waterProjectIds=new Set(waterProjects.map(p=>p.id));
            const waterExpenses=(appData.transactions||[]).filter(t=>t.type==='EXPENSE' && (t.sector==='water'||t.sectorId==='water'||waterProjectIds.has(t.projectId))).reduce((sum,t)=>sum+Number(t.amount||0),0);
            const fmt=v=>Number(v||0).toLocaleString('ar-MA',{minimumFractionDigits:2,maximumFractionDigits:2})+' د.م.';
            const setKpi=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=fmt(v);};
            setKpi('water-kpi-income',waterIncome);setKpi('water-kpi-unpaid-amount',unpaidAmount);setKpi('water-kpi-expenses',waterExpenses);setKpi('water-kpi-balance',waterIncome-waterExpenses);


            const statusEl=document.getElementById('water-filter-status');
            const filterStatus = statusEl ? statusEl.value : 'ALL';
            const searchEl=document.getElementById('water-invoice-search');
            const invoiceQuery=String(searchEl?.value||'').trim().toLocaleLowerCase('ar');
            const tbody = document.getElementById('water-invoices-tbody');
            document.querySelectorAll('#water-invoice-filter-chips [data-filter]').forEach(btn=>btn.classList.toggle('active',btn.dataset.filter===filterStatus));
            const filtered = appData.waterInvoices.filter(inv => {
                const balance=waterInvoiceBalance(inv), paid=waterInvoicePaid(inv);
                if (filterStatus === 'UNPAID' && (paid>0.001 || balance<=0.001)) return false;
                if (filterStatus === 'PAID' && balance>0.001) return false;
                if (filterStatus === 'DEBT' && !(paid>0.001 && balance>0.001)) return false;
                if (invoiceQuery) {
                    const sub=(appData.subscribers||[]).find(x=>x.id===inv.subId||x.meterNo===inv.meterNo);
                    const haystack=[inv.id,inv.subName,inv.meterNo,sub?.name].join(' ').toLocaleLowerCase('ar');
                    if(!haystack.includes(invoiceQuery))return false;
                }
                return true;
            });

            tbody.innerHTML = filtered.length
                ? filtered.map(inv => {
                    const sub = appData.subscribers.find(x => x.id === inv.subId || x.meterNo === inv.meterNo);
                    const memberFlag = !!(sub && (sub.isMember === true || sub.member === true || ['MEMBER','ACTIVE','منخرط','منخرطة'].includes(String(sub.memberStatus || sub.membershipStatus || '').toUpperCase())));
                    const balance = waterInvoiceBalance(inv);
                    const paid = waterInvoicePaid(inv);
                    const statusLabel = balance <= 0.001 ? 'مؤداة' : paid > 0 ? 'أداء جزئي' : 'غير مؤداة';
                    const statusClass = balance <= 0.001 ? 'water-status-paid' : paid > 0 ? 'water-status-partial' : 'water-status-unpaid';
                    const displayName = inv.subName || (sub && sub.name) || 'مشترك';
                    return `
                    <article class="water-invoice-card">
                      <div class="water-invoice-main">
                        <div class="water-invoice-identity">
                          <div class="water-invoice-name">${escapeDocText(displayName)}</div>
                          <div class="water-invoice-meter">عداد ${escapeDocText(inv.meterNo || (sub && sub.meterNo) || '—')}</div>
                          <div class="water-invoice-meta">
                            ${memberFlag ? '<span class="water-member-mark"><i class="fa-solid fa-circle-check"></i> منخرط</span>' : '<span class="water-nonmember-mark">غير منخرط</span>'}
                            <span class="water-invoice-period">${escapeDocText(inv.period || '')}</span>
                          </div>
                        </div>
                        <div class="water-invoice-amount-block">
                          <div class="water-invoice-amount">${Number(inv.total || 0).toLocaleString('ar-MA')} <small>د.م.</small></div>
                          <div class="water-invoice-debt">الدين: <b class="${balance > 0.001 ? 'is-debt' : 'is-clear'}">${balance.toLocaleString('ar-MA',{minimumFractionDigits:2,maximumFractionDigits:2})} د.م.</b></div>
                        </div>
                      </div>
                      <div class="water-invoice-actions">
                        <span class="water-invoice-status ${statusClass}">${statusLabel}</span>
                        ${balance>0.001 ? `<button type="button" onclick="payWaterInvoice('${inv.id}')" class="water-action-pay">أداء</button>` : ''}
                        <button type="button" onclick="sendWaterInvoiceWhatsApp('${inv.id}','invoice')" class="water-action-whatsapp" aria-label="واتساب الفاتورة"><i class="fa-brands fa-whatsapp"></i></button>
                        <button type="button" onclick="printWaterInvoice('${inv.id}')" class="water-action-print" aria-label="طباعة الفاتورة"><i class="fa-solid fa-print"></i></button>
                        ${balance<=0.001 ? `<button type="button" onclick="printWaterReceipt('${inv.id}')" class="water-action-receipt" aria-label="طباعة الوصل"><i class="fa-solid fa-receipt"></i></button>` : ''}
                        <details class="water-invoice-details"><summary>تفاصيل الفاتورة</summary><div>رقم: ${escapeDocText(inv.id)} · القراءة: ${Number(inv.prevReading||0)} ← ${Number(inv.currReading||0)} · الاستهلاك: ${Number(inv.consumption||0)} م³ · المؤدى: ${paid.toLocaleString('ar-MA')} د.م.</div></details>
                      </div>
                    </article>`;
                }).join('')
                : '<div class="water-invoice-empty">لا توجد فواتير ماء حالياً.</div>';
            renderWaterWhatsAppLog();
            const unpaid = (appData.waterInvoices || []).filter(i => waterInvoiceBalance(i) > 0.001);
            document.getElementById('wa-unpaid-count').textContent = unpaid.length;
            document.getElementById('wa-phone-count').textContent = unpaid.filter(i => { const sub = appData.subscribers.find(x => x.id === i.subId); return !!(sub && sub.whatsappConsent && normalizeMoroccanWhatsAppPhone(sub.phone)); }).length;
            document.getElementById('wa-log-count').textContent = (appData.waterNotifications || []).length;
            enforceWaterReaderView();
        }

        function normalizeMoroccanWhatsAppPhone(value) {
            let n = String(value || '').replace(/[\s().-]/g, '');
            if (n.startsWith('00')) n = '+' + n.slice(2);
            if (n.startsWith('+')) n = n.slice(1);
            if (/^0[67]\d{8}$/.test(n)) n = '212' + n.slice(1);
            else if (/^[67]\d{8}$/.test(n)) n = '212' + n;
            return /^212[67]\d{8}$/.test(n) ? n : '';
        }

        function getWaterWhatsAppMessage(inv, kind) {
            const sub = appData.subscribers.find(x => x.id === inv.subId) || {};
            const title = kind === 'reminder' ? 'تذكير بأداء فاتورة الماء' : 'إشعار بفاتورة ماء جديدة';
            return `السلام عليكم ${inv.subName || sub.name || ''}،\n\n${title}:\nرقم الفاتورة: ${inv.id}\nرقم العداد: ${inv.meterNo || sub.meterNo || '--'}\nالفترة: ${inv.period || '--'}\nالاستهلاك: ${inv.consumption ?? '--'} م³\nالمبلغ المستحق: ${Number(waterInvoiceBalance(inv)).toLocaleString('ar-MA')} درهم\nالحالة: ${inv.status==='PARTIAL'?'أداء جزئي':'غير مؤداة'}\n\nالمرجو تسوية الفاتورة داخل الآجال المحددة.\nجمعية إدزاح إدبوكا للماء والتنمية والثقافة والتضامن الاجتماعي.`;
        }

        function recordWaterWhatsAppOpen(inv, kind, phone) {
            if (!Array.isArray(appData.waterNotifications)) appData.waterNotifications = [];
            appData.waterNotifications.unshift({ id: 'WAN-' + Date.now(), invoiceId: inv.id, subId: inv.subId, subscriberName: inv.subName, phone, kind, method: 'whatsapp_click_to_chat', status: 'CHAT_OPENED_NOT_CONFIRMED', createdAt: new Date().toISOString() });
            logAudit('فتح إشعار واتساب للماء', `فتح محادثة واتساب للمشترك ${inv.subName} عن الفاتورة ${inv.id}؛ لم يتم تأكيد الإرسال`);
            saveState();
            renderWaterWhatsAppLog();
        }

        function sendWaterInvoiceWhatsApp(invoiceId, kind='invoice') {
            const inv = appData.waterInvoices.find(x => x.id === invoiceId);
            if (!inv) return showToast('الفاتورة غير موجودة', true);
            if (waterInvoiceBalance(inv) <= 0.001) return showToast('هذه الفاتورة مؤداة بالكامل ولا تحتاج إلى تذكير', true);
            const sub = appData.subscribers.find(x => x.id === inv.subId);
            if (!sub) return showToast('ملف المشترك غير موجود', true);
            if (!sub.whatsappConsent) return showToast('لم تُسجل موافقة المشترك على إشعارات واتساب', true);
            const phone = normalizeMoroccanWhatsAppPhone(sub.phone);
            if (!phone) return showToast('رقم الهاتف غير صالح؛ صححه في ملف المشترك', true);
            const url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(getWaterWhatsAppMessage(inv, kind));
            const win = window.open(url, '_blank');
            if (!win) return showToast('تعذر فتح واتساب؛ اسمح بفتح الروابط ثم أعد المحاولة', true);
            recordWaterWhatsAppOpen(inv, kind, phone);
            showToast('فُتحت محادثة واتساب. اضغط إرسال داخل واتساب ثم ارجع للتطبيق');
        }

        function startWaterWhatsAppQueue(kind='invoice') {
            const unpaid = (appData.waterInvoices || []).filter(i => waterInvoiceBalance(i) > 0.001);
            waterWhatsAppQueue = unpaid.filter(inv => {
                const sub = appData.subscribers.find(x => x.id === inv.subId);
                return sub && sub.whatsappConsent && normalizeMoroccanWhatsAppPhone(sub.phone);
            });
            waterWhatsAppQueueIndex = 0;
            waterWhatsAppQueueKind = kind;
            const missing = unpaid.length - waterWhatsAppQueue.length;
            const panel = document.getElementById('wa-queue-panel');
            panel.classList.remove('hidden');
            if (!waterWhatsAppQueue.length) {
                document.getElementById('wa-queue-status').textContent = 'لا توجد فواتير غير مؤداة لمشتركين لديهم رقم صالح وموافقة مسجلة.';
                return;
            }
            document.getElementById('wa-queue-status').textContent = `تم تجهيز ${waterWhatsAppQueue.length} إشعاراً. ${missing} فاتورة مستثناة لغياب الرقم أو الموافقة.`;
        }

        function sendNextWaterWhatsApp() {
            if (waterWhatsAppQueueIndex >= waterWhatsAppQueue.length) {
                document.getElementById('wa-queue-status').textContent = 'اكتملت قائمة فتح المحادثات. تحقق من واتساب لإرسال الرسائل فعلياً.';
                return;
            }
            const inv = waterWhatsAppQueue[waterWhatsAppQueueIndex];
            const sub = appData.subscribers.find(x => x.id === inv.subId);
            const phone = normalizeMoroccanWhatsAppPhone(sub?.phone);
            if (!phone) { waterWhatsAppQueueIndex++; return sendNextWaterWhatsApp(); }
            const win = window.open('https://wa.me/' + phone + '?text=' + encodeURIComponent(getWaterWhatsAppMessage(inv, waterWhatsAppQueueKind)), '_blank');
            if (!win) return showToast('تعذر فتح واتساب. اسمح بالنوافذ أو الروابط المنبثقة', true);
            recordWaterWhatsAppOpen(inv, waterWhatsAppQueueKind, phone);
            waterWhatsAppQueueIndex++;
            document.getElementById('wa-queue-status').textContent = `تم فتح ${waterWhatsAppQueueIndex} من ${waterWhatsAppQueue.length} محادثة. أرسل الرسالة في واتساب ثم اضغط التالي.`;
        }

        function cancelWaterWhatsAppQueue() {
            waterWhatsAppQueue = []; waterWhatsAppQueueIndex = 0;
            document.getElementById('wa-queue-panel').classList.add('hidden');
        }

        function renderWaterWhatsAppLog() {
            const tbody = document.getElementById('wa-log-tbody');
            if (!tbody) return;
            const rows = (appData.waterNotifications || []).slice(0, 30);
            tbody.innerHTML = rows.length ? rows.map(x => `<tr class="border-b"><td class="p-2">${new Date(x.createdAt).toLocaleString('ar-MA')}</td><td class="p-2">${x.subscriberName || '--'}</td><td class="p-2 font-mono">${x.invoiceId || '--'}</td><td class="p-2">${x.kind === 'reminder' ? 'تذكير' : 'فاتورة'}</td><td class="p-2 text-amber-700 font-bold">فُتحت المحادثة – غير مؤكد الإرسال</td></tr>`).join('') : '<tr><td colspan="5" class="p-4 text-center text-slate-400">لا توجد إشعارات مسجلة بعد</td></tr>';
        }

        function payWaterInvoice(invoiceId) {
            if (isWaterReaderSession()) return showToast('حسابك مخصص لتسجيل القراءات فقط', true);
            const inv = appData.waterInvoices.find(i => i.id === invoiceId);
            if (!inv) return;
            const balance = waterInvoiceBalance(inv);
            if (balance <= 0) return showToast('هذه الفاتورة مسددة بالكامل');
            document.getElementById('water-payment-invoice-id').value = inv.id;
            document.getElementById('water-payment-invoice-info').innerHTML = `<b>${escapeDocText(inv.subName)}</b> · فاتورة ${escapeDocText(inv.id)}<br>الإجمالي: ${Number(inv.total).toFixed(2)} درهم · المؤدى: ${waterInvoicePaid(inv).toFixed(2)} درهم · المتبقي: <b class="text-rose-700">${balance.toFixed(2)} درهم</b>`;
            document.getElementById('water-payment-amount').value = balance.toFixed(2);
            document.getElementById('water-payment-amount').max = balance.toFixed(2);
            document.getElementById('water-payment-date').value = new Date().toISOString().slice(0,10);
            document.getElementById('water-payment-note').value = '';
            openModal('modalWaterPayment');
        }
        function waterInvoicePaid(inv) {
            const ledger = (appData.waterPayments || []).filter(p => p.invoiceId === inv.id).reduce((n,p)=>n+Number(p.amount||0),0);
            if (ledger > 0) return Math.min(Number(inv.total||0), ledger);
            if (Number(inv.paidAmount||0) > 0) return Math.min(Number(inv.total||0), Number(inv.paidAmount));
            return inv.status === 'PAID' ? Number(inv.total||0) : 0;
        }
        function waterInvoiceBalance(inv) { return Math.max(0, Number(inv.total||0) - waterInvoicePaid(inv)); }
        function submitWaterPayment(e) {
            e.preventDefault();
            if (isWaterReaderSession()) return showToast('غير مسموح: صلاحية القراءة فقط', true);
            const inv = appData.waterInvoices.find(i=>i.id===document.getElementById('water-payment-invoice-id').value);
            const amount = Number(document.getElementById('water-payment-amount').value);
            if (!inv || !Number.isFinite(amount) || amount <= 0) return showToast('بيانات الأداء غير صحيحة', true);
            const balance = waterInvoiceBalance(inv);
            if (amount > balance + 0.001) return showToast('المبلغ أكبر من الرصيد المتبقي', true);
            const payment = { id:'WPM-'+Date.now(), invoiceId:inv.id, subId:inv.subId, subscriberName:inv.subName, amount:Number(amount.toFixed(2)), date:document.getElementById('water-payment-date').value, method:document.getElementById('water-payment-method').value, note:document.getElementById('water-payment-note').value.trim(), receiptNo:'WREC-'+new Date().getFullYear()+'-'+String((appData.waterPayments||[]).length+1).padStart(4,'0'), receiver:appData.currentUser, createdAt:new Date().toISOString() };
            if (!Array.isArray(appData.waterPayments)) appData.waterPayments=[];
            appData.waterPayments.unshift(payment);
            const paid = waterInvoicePaid(inv);
            inv.paidAmount = paid;
            inv.balance = waterInvoiceBalance(inv);
            inv.status = inv.balance <= 0.001 ? 'PAID' : 'PARTIAL';
            inv.lastPaidAt = payment.date;
            const waterProject = appData.projects.find(p => /عدادات|البئر|الماء/i.test(p.name)) || appData.projects[0];
            appData.transactions.unshift({ id:'TRX-WAT-'+Date.now(), receiptNo:payment.receiptNo, date:payment.date, type:'INCOME', projectId:waterProject?.id||'', category:'تحصيل فاتورة ماء', party:inv.subName, amount:payment.amount, method:payment.method, receiver:appData.currentUser, reason:`دفعة عن فاتورة ${inv.id}${payment.note?' - '+payment.note:''}`, sector:'water', waterInvoiceId:inv.id });
            logAudit('تسجيل أداء فاتورة ماء', `دفعة ${payment.amount} درهم عن ${inv.id}؛ المتبقي ${inv.balance.toFixed(2)} درهم`);
            saveState(); closeModal('modalWaterPayment'); renderAll(); printWaterPaymentReceipt(inv.id,payment.id); showToast(inv.status==='PAID'?'تمت تسوية الفاتورة بالكامل':'تم تسجيل الأداء الجزئي بنجاح');
        }
        function printWaterPaymentReceipt(invoiceId,paymentId) {
            const inv=appData.waterInvoices.find(x=>x.id===invoiceId), p=(appData.waterPayments||[]).find(x=>x.id===paymentId); if(!inv||!p)return;
            const doc={...inv,id:p.receiptNo,paymentInvoiceId:inv.id,total:p.amount,status:'PAID',period:inv.period,receiptDate:p.date,paymentMethod:p.method,paymentNote:p.note};
            openWaterPrintDocument(doc,'receipt');
        }
        function isWaterReaderSession(){ const u=(appData.users||[]).find(x=>x.id===authenticatedUserId); return !!(u && u.role==='مسؤول قراءات الماء'); }
        function isWaterReaderAccountActive(){const u=(appData.users||[]).find(x=>x.id===authenticatedUserId);return !!(u&&u.role==='مسؤول قراءات الماء'&&u.status==='ACTIVE');}
        function enforceWaterReaderView(){
            const reader=isWaterReaderSession();
            applySectorNavigation();
            if(reader){
                document.querySelectorAll('#sec-water > *').forEach(el=>el.classList.add('hidden'));
                const top=document.querySelector('#sec-water > div:first-child');
                if(top){top.classList.remove('hidden');top.querySelectorAll('button').forEach(b=>{if(!String(b.getAttribute('onclick')||'').includes('modalWaterReading'))b.classList.add('hidden');else b.innerHTML='<i class=\"fa-solid fa-gauge\"></i> تسجيل قراءة فقط';});}
                const queue=document.getElementById('water-reading-queue-panel');if(queue)queue.classList.remove('hidden');
                switchTab('water');
            }
        }
        function openWaterReaderAssignment(){ if(isWaterReaderSession())return; const u=(appData.users||[]).find(x=>x.role==='مسؤول قراءات الماء'&&x.status==='ACTIVE'); document.getElementById('water-reader-name').value=u?.fullName||'';document.getElementById('water-reader-username').value=u?.username||'';document.getElementById('water-reader-password').value=u?.passwordHash||'';openModal('modalWaterReader'); }
        function saveWaterReaderAssignment(e){e.preventDefault();const fullName=document.getElementById('water-reader-name').value.trim(),username=document.getElementById('water-reader-username').value.trim(),password=document.getElementById('water-reader-password').value.trim();if(appData.users.some(u=>u.username.toLowerCase()===username.toLowerCase()&&u.role!=='مسؤول قراءات الماء'))return showToast('اسم المستخدم مستعمل من حساب آخر',true);let u=appData.users.find(x=>x.role==='مسؤول قراءات الماء');if(u){u.fullName=fullName;u.username=username;u.passwordHash=password;u.status='ACTIVE';}else appData.users.push({id:'USR-WR-'+Date.now(),fullName,username,passwordHash:password,role:'مسؤول قراءات الماء',phone:'',status:'ACTIVE',createdAt:new Date().toISOString().slice(0,10)});logAudit('تفويض مسؤول قراءات الماء',`تعيين ${fullName} بصلاحية تسجيل القراءات فقط`);saveState();closeModal('modalWaterReader');renderWater();showToast('تم إنشاء حساب مسؤول القراءات. سلّمه اسم المستخدم وكلمة المرور.');}
        function renderWaterReaderAssignment(){const el=document.getElementById('water-reader-assignment-list');if(!el)return;const u=(appData.users||[]).find(x=>x.role==='مسؤول قراءات الماء');el.innerHTML=u?`<div class="flex justify-between gap-2 items-center"><span><b>${escapeDocText(u.fullName)}</b> · @${escapeDocText(u.username)} · ${u.status==='ACTIVE'?'نشط':'موقوف'}</span><button class="text-rose-700 font-bold" onclick="revokeWaterReaderAssignment()">سحب التفويض</button></div>`:'لا يوجد مسؤول قراءة مفوض حالياً.';}
        function revokeWaterReaderAssignment(){const u=appData.users.find(x=>x.role==='مسؤول قراءات الماء');if(!u)return;u.status='INACTIVE';logAudit('سحب تفويض مسؤول القراءات',u.fullName);saveState();renderWaterReaderAssignment();showToast('تم سحب صلاحية مسؤول القراءات');}
        function saveWaterTariffSettings(){if(isWaterReaderSession())return;const tariff=Number(document.getElementById('water-setting-tariff').value),connection=Number(document.getElementById('water-setting-connection').value),other=Number(document.getElementById('water-setting-other').value);if([tariff,connection,other].some(x=>!Number.isFinite(x)||x<0))return showToast('تحقق من قيم التعريفة والمصاريف',true);appData.settings.waterTariff=tariff;appData.settings.waterConnectionFee=connection;appData.settings.waterOtherFee=other;appData.settings.waterOtherFeeName=document.getElementById('water-setting-other-name').value.trim()||'مصاريف إضافية';logAudit('تحديث تعريفة الماء',`ثمن الوحدة ${tariff}؛ الربط ${connection}؛ ${appData.settings.waterOtherFeeName} ${other}`);saveState();renderWater();showToast('تم حفظ تعريفة الماء والواجبات');}
        function waterCsvParse(text){const rows=[];let row=[],field='',q=false;for(let i=0;i<text.length;i++){const c=text[i];if(c==='"'&&q&&text[i+1]==='"'){field+='"';i++;}else if(c==='"')q=!q;else if(c===','&&!q){row.push(field);field='';}else if((c==='\n'||c==='\r')&&!q){if(c==='\r'&&text[i+1]==='\n')i++;row.push(field);if(row.some(x=>x.trim()))rows.push(row);row=[];field='';}else field+=c;}row.push(field);if(row.some(x=>x.trim()))rows.push(row);return rows;}
        function importWaterSubscribersCSV(){
            const file=document.getElementById('water-subscribers-file').files[0];if(!file)return showToast('اختر ملف Excel أو CSV أولاً',true);
            const reader=new FileReader();reader.onload=()=>{try{
                let rows=[];
                if(/\.xlsx?$/i.test(file.name)){if(typeof XLSX==='undefined')throw new Error('XLSX unavailable');const wb=XLSX.read(reader.result,{type:'array'});rows=XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]],{header:1,defval:''});}
                else rows=waterCsvParse(String(reader.result||'').replace(/^\uFEFF/,''));
                if(rows.length&&/اسم|name/i.test(rows[0].join(' ')))rows.shift();let added=0,skipped=0;
                rows.forEach(r=>{const [name,meter,reading,phone,code,connectionPaid,memberFlag]=r.map(x=>String(x??'').trim());if(!name||!meter||appData.subscribers.some(s=>s.meterNo===meter)){skipped++;return;}if(phone&&!normalizeMoroccanWhatsAppPhone(phone)){skipped++;return;}const accessCode=(code||generateSubscriberAccessCode()).toUpperCase();if(appData.subscribers.some(s=>s.accessCode===accessCode)){skipped++;return;}appData.subscribers.push({id:'SUB-IMP-'+Date.now()+'-'+added,name,meterNo:meter,lastReading:Number(reading)||0,phone,whatsappConsent:false,accessCode,accessCodeActive:true,connectionFeePaid:/^(نعم|yes|y|1|true)$/i.test(connectionPaid),isMember:/^(نعم|yes|y|1|true|منخرط|منخرطة)$/i.test(memberFlag)});added++;});
                logAudit('استيراد مشتركين الماء',`إضافة ${added} مشترك؛ تجاوز ${skipped} سجل مكرر أو غير صالح`);saveState();renderAll();document.getElementById('water-import-result').textContent=`تم استيراد ${added} مشترك، وتجاوز ${skipped} سجل.`;
            }catch(err){showToast('تعذر قراءة الملف؛ تحقق من تنسيق Excel أو CSV',true);}};
            if(/\.xlsx?$/i.test(file.name))reader.readAsArrayBuffer(file);else reader.readAsText(file,'UTF-8');
        }
        function downloadWaterSubscribersTemplate(){const csv='الاسم,رقم العداد,القراءة,الهاتف,رمز الدخول,واجب الربط مؤدى,منخرط\nإبراهيم إدبوكا,M-101,120,0612345678,,لا,نعم\n';const blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='water-subscribers-template.csv';a.click();URL.revokeObjectURL(url);}
        function waterAdvancedMonth(value){return /^\d{4}-\d{2}$/.test(String(value||''))?String(value):new Date().toISOString().slice(0,7);}
        function waterAdvancedMonthTotals(month){
            const invoices=(appData.waterInvoices||[]).filter(i=>waterInvoiceMonthKey(i)===month);
            const payments=(appData.waterPayments||[]).filter(p=>String(p.date||'').slice(0,7)===month);
            const readings=(appData.waterReadings||[]).filter(r=>String(r.date||'').slice(0,7)===month);
            const tx=waterSectorTransactions().filter(t=>String(t.date||'').slice(0,7)===month);
            const billed=invoices.reduce((n,i)=>n+Number(i.total||0),0);
            const collected=payments.reduce((n,p)=>n+Number(p.amount||0),0);
            const expenses=tx.filter(t=>t.type==='EXPENSE').reduce((n,t)=>n+Number(t.amount||0),0);
            const outstanding=invoices.reduce((n,i)=>n+waterInvoiceBalance(i),0);
            return {month,invoiceCount:invoices.length,billed,collectionCount:payments.length,collected,expenses,outstanding,readings:readings.length,balance:collected-expenses,createdAt:new Date().toISOString()};
        }
        function runWaterFinancialAudit(){
            const invoices=appData.waterInvoices||[],payments=appData.waterPayments||[],subs=appData.subscribers||[];
            const billed=invoices.reduce((n,i)=>n+Number(i.total||0),0),collected=payments.reduce((n,p)=>n+Number(p.amount||0),0),outstanding=invoices.reduce((n,i)=>n+waterInvoiceBalance(i),0);
            const expenses=waterSectorTransactions().filter(t=>t.type==='EXPENSE').reduce((n,t)=>n+Number(t.amount||0),0);
            const duplicateIds=invoices.length-new Set(invoices.map(i=>i.id)).size;
            const duplicateReceipts=payments.length-new Set(payments.map(p=>p.receiptNo||p.id)).size;
            const badPayments=payments.filter(p=>!Number.isFinite(Number(p.amount))||Number(p.amount)<=0).length;
            const overpaid=invoices.filter(i=>waterInvoicePaid(i)>Number(i.total||0)+0.001).length;
            const pending=(appData.waterReadings||[]).filter(r=>r.status!=='APPROVED'&&r.status!=='REJECTED').length;
            const duplicateMeters=subs.length-new Set(subs.map(x=>String(x.meterNo||'').trim()).filter(Boolean)).size;
            const fmt=n=>Number(n||0).toLocaleString('ar-MA',{minimumFractionDigits:2,maximumFractionDigits:2})+' د.م.';
            const finance=document.getElementById('water-advanced-finance-check');
            if(finance)finance.innerHTML=`<div class="grid grid-cols-2 gap-2"><div class="rounded bg-slate-50 p-2">المفوتر<b class="block">${fmt(billed)}</b></div><div class="rounded bg-slate-50 p-2">المقبوض من وصولات الماء<b class="block">${fmt(collected)}</b></div><div class="rounded bg-slate-50 p-2">المتبقي على الفواتير<b class="block">${fmt(outstanding)}</b></div><div class="rounded bg-slate-50 p-2">مصاريف الماء<b class="block">${fmt(expenses)}</b></div><div class="rounded bg-slate-50 p-2 col-span-2">الرصيد النقدي المحسوب من أداءات الماء ناقص مصاريفه<b class="block">${fmt(collected-expenses)}</b></div></div><p class="mt-2 text-[10px] text-amber-700">ملاحظة: هذا الرصيد يعتمد سجل أداءات الماء والمصاريف المصنفة للماء، وقد يختلف عن قيود المداخيل العامة إذا لم تُربط بها.</p>`;
            const data=document.getElementById('water-advanced-data-check');
            if(data)data.innerHTML=`<ul class="list-disc pr-5 space-y-1"><li>${pending} قراءة تنتظر الاعتماد</li><li>${duplicateIds} رقم فاتورة مكرر</li><li>${duplicateReceipts} رقم وصل مكرر</li><li>${badPayments} أداء بقيمة غير صالحة</li><li>${overpaid} فاتورة يتجاوز مجموع أدائها قيمتها</li><li>${duplicateMeters} رقم عداد مكرر</li></ul>`;
            renderWaterAdvancedAuditLog();
            return {billed,collected,outstanding,expenses,duplicateIds,duplicateReceipts,badPayments,overpaid,pending,duplicateMeters};
        }
        function closeWaterMonthSnapshot(){
            if(isWaterReaderSession())return showToast('هذه الوظيفة للمكتب المسير فقط',true);
            const input=document.getElementById('water-close-month'),month=waterAdvancedMonth(input?.value);
            if(!confirm(`حفظ كشف إقفال شهر ${month}؟ سيتم حفظ لقطة مراجعة لا تحذف العمليات الأصلية.`))return;
            if(!Array.isArray(appData.waterMonthClosures))appData.waterMonthClosures=[];
            const existing=appData.waterMonthClosures.find(x=>x.month===month);
            if(existing&&!confirm('يوجد إقفال محفوظ لهذا الشهر. هل تريد إضافة لقطة مراجعة جديدة دون حذف السابقة؟'))return;
            const snapshot=waterAdvancedMonthTotals(month);snapshot.id='WMC-'+month+'-'+Date.now();snapshot.closedBy=appData.currentUser||'المكتب المسير';
            appData.waterMonthClosures.unshift(snapshot);logAudit('حفظ إقفال شهر الماء',`حفظ لقطة مراجعة لشهر ${month}؛ المقبوض ${snapshot.collected.toFixed(2)} والمصاريف ${snapshot.expenses.toFixed(2)}`);saveState();
            const el=document.getElementById('water-month-closure-status');if(el)el.textContent=`حُفظت لقطة ${month} بتاريخ ${new Date().toLocaleString('ar-MA')} · المقبوض ${snapshot.collected.toFixed(2)} د.م. · المصاريف ${snapshot.expenses.toFixed(2)} د.م. · المتبقي ${snapshot.outstanding.toFixed(2)} د.م.`;
            renderWaterMonthClosures();showToast('تم حفظ كشف إقفال الشهر');
        }
        function renderWaterMonthClosures(){const el=document.getElementById('water-month-closure-list');if(!el)return;const rows=(appData.waterMonthClosures||[]).slice().sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt))).slice(0,12);const fmt=n=>Number(n||0).toFixed(2)+' د.م.';el.innerHTML=rows.length?`<table class="w-full text-right"><thead class="bg-slate-50"><tr><th class="p-2">الشهر</th><th class="p-2">المقبوض</th><th class="p-2">المصاريف</th><th class="p-2">المتبقي</th><th class="p-2">المسؤول</th></tr></thead><tbody>${rows.map(x=>`<tr class="border-b"><td class="p-2">${escapeDocText(x.month||'')}</td><td class="p-2">${fmt(x.collected)}</td><td class="p-2">${fmt(x.expenses)}</td><td class="p-2">${fmt(x.outstanding)}</td><td class="p-2">${escapeDocText(x.closedBy||'')}</td></tr>`).join('')}</tbody></table>`:'<p class="text-slate-400 p-2">لا توجد أشهر محفوظة بعد.</p>';}
        function exportWaterBackup(){
            const waterTx=waterSectorTransactions();
            const backup={kind:'EDZAKH_WATER_BACKUP',version:1,createdAt:new Date().toISOString(),subscribers:appData.subscribers||[],waterInvoices:appData.waterInvoices||[],waterPayments:appData.waterPayments||[],waterReadings:appData.waterReadings||[],waterNotifications:appData.waterNotifications||[],waterMonthClosures:appData.waterMonthClosures||[],waterTransactions:waterTx,waterSettings:{waterTariff:appData.settings?.waterTariff,waterConnectionFee:appData.settings?.waterConnectionFee,waterOtherFee:appData.settings?.waterOtherFee,waterOtherFeeName:appData.settings?.waterOtherFeeName,waterDocumentSettings:appData.settings?.waterDocumentSettings}};
            const blob=new Blob([JSON.stringify(backup,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='edzakh-water-backup-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);const el=document.getElementById('water-backup-status');if(el)el.textContent='تم تجهيز نسخة احتياطية لبيانات الماء. احتفظ بها خارج الهاتف أيضاً.';logAudit('تصدير نسخة احتياطية للماء','تصدير بيانات قطاع الماء');
        }
        function importWaterBackup(event){
            const file=event.target.files?.[0];if(!file)return;
            const reader=new FileReader();reader.onload=()=>{try{const b=JSON.parse(String(reader.result||''));if(b.kind!=='EDZAKH_WATER_BACKUP'||b.version!==1)throw new Error('صيغة النسخة غير معروفة');if(!confirm('سيتم استبدال سجلات الماء الموجودة ببيانات النسخة، ودمج المشتركين حسب رقم العداد/المعرف، دون تغيير معاملات القطاعات الأخرى. هل تتابع؟'))return;
                const arrays=['waterInvoices','waterPayments','waterReadings','waterNotifications','waterMonthClosures'];for(const k of arrays){if(!Array.isArray(b[k]))throw new Error('النسخة ناقصة: '+k);}
                const existing=Array.isArray(appData.subscribers)?appData.subscribers:[],incoming=Array.isArray(b.subscribers)?b.subscribers:[];const merged=existing.slice();incoming.forEach(x=>{const idx=merged.findIndex(y=>(x.id&&y.id===x.id)||(x.meterNo&&y.meterNo===x.meterNo));if(idx>=0)merged[idx]={...merged[idx],...x};else merged.push(x);});appData.subscribers=merged;
                arrays.forEach(k=>appData[k]=b[k]);if(!Array.isArray(appData.transactions))appData.transactions=[];const waterProjectIds=new Set((appData.projects||[]).filter(p=>/ماء|بئر|عداد/i.test(p.name||'')).map(p=>p.id));const ids=new Set((b.waterTransactions||[]).map(t=>t.id));appData.transactions=appData.transactions.filter(t=>!(t.sector==='water'||waterProjectIds.has(t.projectId)||ids.has(t.id))).concat(b.waterTransactions||[]);
                appData.settings=appData.settings||{};Object.assign(appData.settings,b.waterSettings||{});logAudit('استرجاع نسخة احتياطية للماء',`استرجاع بيانات من ${file.name}`);saveState();renderAll();const el=document.getElementById('water-backup-status');if(el)el.textContent='تم استرجاع نسخة الماء بنجاح. راجع المشتركين والفواتير والأداءات.';showToast('تم استرجاع نسخة الماء');
            }catch(err){showToast('تعذر استرجاع النسخة: '+err.message,true);}finally{event.target.value='';}};reader.readAsText(file,'UTF-8');
        }
        function renderWaterAdvancedAuditLog(){
            const body=document.getElementById('water-advanced-audit-body');if(!body)return;
            const rows=(appData.auditLogs||[]).filter(x=>/ماء|قراءة|فاتورة|وصل|أداء|مشترك|واتساب|تعريفة|إقفال|نسخة احتياطية/i.test(String(x.type||'')+' '+String(x.details||''))).slice(0,60);
            body.innerHTML=rows.map(x=>`<tr class="border-b"><td class="p-2 whitespace-nowrap">${escapeDocText(x.timestamp||'')}</td><td class="p-2">${escapeDocText(x.user||'')}</td><td class="p-2">${escapeDocText(x.type||'')}</td><td class="p-2">${escapeDocText(x.details||'')}</td></tr>`).join('')||'<tr><td colspan="4" class="p-3 text-center text-slate-400">لا توجد عمليات ماء مسجلة في سجل التدقيق بعد</td></tr>';
        }
        function runWaterOperationalDiagnostics(){
            const checks=[['سجل المشتركين',Array.isArray(appData.subscribers)],['الفواتير',Array.isArray(appData.waterInvoices)],['الأداءات',Array.isArray(appData.waterPayments)],['القراءات',Array.isArray(appData.waterReadings)],['استيراد المشتركين',typeof importWaterSubscribersCSV==='function'],['طباعة الفواتير',typeof printWaterBatch==='function'],['طباعة الوصولات',typeof printWaterPaymentReceipt==='function'],['تصدير نسخة الماء',typeof exportWaterBackup==='function']];
            const el=document.getElementById('water-operational-diagnostics');if(el)el.innerHTML=checks.map(([name,ok])=>`<div class="flex justify-between border-b py-1"><span>${name}</span><b class="${ok?'text-emerald-700':'text-rose-700'}">${ok?'متوفر':'غير متوفر'}</b></div>`).join('')+'<p class="mt-2 text-[10px] text-amber-700">هذا فحص وجود الوظائف والبيانات فقط، وليس اختبار طباعة فعلية أو اختباراً أمنياً على خادم.</p>';
        }

        function waterInvoiceMonthKey(inv){const raw=String(inv.createdAt||inv.date||inv.periodKey||'');if(/^\d{4}-\d{2}/.test(raw))return raw.slice(0,7);const period=String(inv.period||'');const years=period.match(/(20\d{2})/);const months={'يناير':'01','فبراير':'02','مارس':'03','أبريل':'04','ابريل':'04','ماي':'05','مايو':'05','يونيو':'06','يوليوز':'07','يوليو':'07','غشت':'08','أغسطس':'08','شتنبر':'09','سبتمبر':'09','أكتوبر':'10','اكتوبر':'10','نونبر':'11','نوفمبر':'11','دجنبر':'12','ديسمبر':'12'};if(years){for(const [name,num] of Object.entries(months))if(period.includes(name))return years[1]+'-'+num;}return '';}
        function waterSectorTransactions(){const waterProjectIds=(appData.projects||[]).filter(p=>/ماء|بئر|عداد/i.test(p.name||'')).map(p=>p.id);return (appData.transactions||[]).filter(t=>t.sector==='water'||waterProjectIds.includes(t.projectId));}
        function renderWaterMonthlyReport(){
            const month=document.getElementById('water-report-month')?.value||new Date().toISOString().slice(0,7);
            const invoices=(appData.waterInvoices||[]).filter(i=>waterInvoiceMonthKey(i)===month);
            const payments=(appData.waterPayments||[]).filter(p=>String(p.date||'').slice(0,7)===month);
            const readings=(appData.waterReadings||[]).filter(r=>String(r.date||'').slice(0,7)===month);
            const tx=waterSectorTransactions().filter(t=>String(t.date||'').slice(0,7)===month);
            const billed=invoices.reduce((n,i)=>n+Number(i.total||0),0),collected=tx.filter(t=>t.type==='INCOME').reduce((n,t)=>n+Number(t.amount||0),0),expenses=tx.filter(t=>t.type==='EXPENSE').reduce((n,t)=>n+Number(t.amount||0),0),outstanding=invoices.reduce((n,i)=>n+waterInvoiceBalance(i),0),net=collected-expenses,waterBudget=(appData.projects||[]).filter(p=>/ماء|بئر|عداد/i.test(p.name||'')).reduce((n,p)=>n+Number(p.budget||0),0),allWaterTx=waterSectorTransactions(),allWaterBalance=allWaterTx.reduce((n,t)=>n+(t.type==='INCOME'?Number(t.amount||0):-Number(t.amount||0)),0);
            const el=document.getElementById('water-report-summary');if(el)el.innerHTML=[['عدد الفواتير',invoices.length],['قيمة الفواتير',billed.toFixed(2)+' د.م.'],['المداخيل المحصلة',collected.toFixed(2)+' د.م.'],['المصاريف',expenses.toFixed(2)+' د.م.'],['المتأخرات',outstanding.toFixed(2)+' د.م.'],['الصافي الشهري',net.toFixed(2)+' د.م.'],['الميزانية المخصصة للماء',waterBudget.toFixed(2)+' د.م.'],['الرصيد المالي التراكمي',allWaterBalance.toFixed(2)+' د.م.'],['القراءات',readings.length],['الأداءات',payments.length]].map(x=>`<div class="rounded-lg bg-slate-50 p-3"><small class="text-slate-500">${x[0]}</small><b class="block text-lg">${x[1]}</b></div>`).join('');
            const arch=document.getElementById('water-monthly-archive');if(arch){const months=[...new Set([...(appData.waterInvoices||[]).map(i=>waterInvoiceMonthKey(i)),...(appData.waterPayments||[]).map(p=>String(p.date||'').slice(0,7)),...(appData.waterReadings||[]).map(r=>String(r.date||'').slice(0,7)),...waterSectorTransactions().map(t=>String(t.date||'').slice(0,7))].filter(x=>/^\d{4}-\d{2}$/.test(x)))].sort().reverse();arch.innerHTML=`<table class="w-full text-right"><thead class="bg-amber-50"><tr><th class="p-2">الشهر</th><th class="p-2">الفواتير</th><th class="p-2">المفوتر</th><th class="p-2">المداخيل</th><th class="p-2">المصاريف</th><th class="p-2">المتأخرات</th><th class="p-2">الصافي</th></tr></thead><tbody>${months.map(m=>{const ii=appData.waterInvoices.filter(i=>waterInvoiceMonthKey(i)===m),tt=waterSectorTransactions().filter(t=>String(t.date||'').slice(0,7)===m),income=tt.filter(t=>t.type==='INCOME').reduce((n,t)=>n+Number(t.amount||0),0),expense=tt.filter(t=>t.type==='EXPENSE').reduce((n,t)=>n+Number(t.amount||0),0);return `<tr class="border-b"><td class="p-2">${m}</td><td class="p-2">${ii.length}</td><td class="p-2">${ii.reduce((n,i)=>n+Number(i.total||0),0).toFixed(2)}</td><td class="p-2">${income.toFixed(2)}</td><td class="p-2">${expense.toFixed(2)}</td><td class="p-2">${ii.reduce((n,i)=>n+waterInvoiceBalance(i),0).toFixed(2)}</td><td class="p-2">${(income-expense).toFixed(2)}</td></tr>`}).join('')||'<tr><td colspan="7" class="p-3 text-center">لا توجد أرشيفات بعد</td></tr>'}</tbody></table>`;}
        }
        function printWaterMonthlyReport(){renderWaterMonthlyReport();const html=document.getElementById('water-report-summary').outerHTML+document.getElementById('water-monthly-archive').outerHTML;const w=window.open('','_blank');if(!w)return showToast('اسمح بفتح نافذة الطباعة',true);w.document.write(`<html dir="rtl"><meta charset="utf-8"><title>تقرير قطاع الماء</title><body style="font-family:Arial;padding:20px"><h2>التقرير الشامل لقطاع الماء</h2>${html}<script>window.onload=()=>window.print()<\/script>

</body></html>`);w.document.close();}
        function renderWaterPaymentsHistory(){const body=document.getElementById('water-payments-tbody');if(!body)return;const rows=(appData.waterPayments||[]).slice(0,100);body.innerHTML=rows.map(p=>`<tr class="border-b"><td class="p-2">${escapeDocText(p.date||'')}</td><td class="p-2 font-mono">${escapeDocText(p.receiptNo||p.id)}</td><td class="p-2">${escapeDocText(p.subscriberName||'')}</td><td class="p-2">${escapeDocText(p.invoiceId||'')}</td><td class="p-2 font-bold">${Number(p.amount||0).toFixed(2)} د.م.</td><td class="p-2">${escapeDocText(p.method||'')}</td><td class="p-2">${escapeDocText(p.receiver||'')}</td><td class="p-2"><button class="text-emerald-700 font-bold" onclick="printWaterPaymentReceipt('${p.invoiceId}','${p.id}')">طباعة الوصل</button></td></tr>`).join('')||'<tr><td colspan="8" class="p-3 text-center text-slate-400">لا توجد أداءات مسجلة بعد</td></tr>';}
        function rejectWaterReading(id){if(isWaterReaderSession())return;const r=(appData.waterReadings||[]).find(x=>x.id===id);if(!r||r.status==='APPROVED')return;const sub=appData.subscribers.find(x=>x.id===r.subId);if(sub&&Number(sub.lastReading)===Number(r.currReading)){const prior=(appData.waterReadings||[]).filter(x=>x.subId===sub.id&&x.id!==r.id&&x.status!=='REJECTED').sort((a,b)=>String(b.date).localeCompare(String(a.date)))[0];sub.lastReading=prior?prior.currReading:r.prevReading;}r.status='REJECTED';logAudit('رفض قراءة ماء',`رفض القراءة للمشترك ${r.subName} بتاريخ ${r.date}`);saveState();renderWater();showToast('تم رفض القراءة');}
        function renderWaterReadings(){const body=document.getElementById('water-readings-tbody');if(!body)return;const rows=(appData.waterReadings||[]).filter(r=>!isWaterReaderSession()||r.recordedBy===appData.currentUser);body.innerHTML=rows.slice().reverse().map(r=>`<tr class="border-b"><td class="p-2">${escapeDocText(r.date||'')}</td><td class="p-2">${escapeDocText(r.subName||'')}</td><td class="p-2">${escapeDocText(r.meterNo||'')}</td><td class="p-2">${r.prevReading}</td><td class="p-2">${r.currReading}</td><td class="p-2">${escapeDocText(r.recordedBy||'')}</td><td class="p-2">${r.status==='APPROVED'?'معتمدة':'في انتظار الاعتماد'}</td><td class="p-2">${r.status!=='APPROVED'&&!isWaterReaderSession()?`<button class="bg-emerald-700 text-white rounded px-2 py-1" onclick="approveWaterReading('${r.id}')">اعتماد وإصدار فاتورة</button> <button class="bg-rose-50 text-rose-700 rounded px-2 py-1" onclick="rejectWaterReading('${r.id}')">رفض</button>`:'—'}</td></tr>`).join('')||'<tr><td colspan="8" class="p-3 text-center text-slate-400">لا توجد قراءات مسجلة</td></tr>';}
        function approveWaterReading(id){const r=(appData.waterReadings||[]).find(x=>x.id===id);if(!r||r.status==='APPROVED'||isWaterReaderSession())return;const sub=appData.subscribers.find(x=>x.id===r.subId);if(!sub)return showToast('المشترك غير موجود',true);const tariff=Number(appData.settings.waterTariff||0),consumption=Number(r.currReading)-Number(r.prevReading),consumptionAmount=consumption*tariff,connectionFee=sub.connectionFeePaid?0:Number(appData.settings.waterConnectionFee||0),otherFee=Number(appData.settings.waterOtherFee||0),total=Number((consumptionAmount+connectionFee+otherFee).toFixed(2));const inv={id:'INV-'+r.date.slice(0,4)+'-'+String(appData.waterInvoices.length+1).padStart(4,'0'),subId:sub.id,subName:sub.name,meterNo:sub.meterNo,period:r.period,periodKey:r.periodKey,createdAt:r.date,prevReading:r.prevReading,currReading:r.currReading,consumption,tariff,consumptionAmount,connectionFee,otherFee,otherFeeName:appData.settings.waterOtherFeeName,total,status:'UNPAID',paidAmount:0};sub.lastReading=r.currReading;if(connectionFee>0)sub.connectionFeePaid=true;appData.waterInvoices.unshift(inv);r.status='APPROVED';r.invoiceId=inv.id;logAudit('اعتماد قراءة وإصدار فاتورة',`${inv.id} للمشترك ${sub.name}`);saveState();renderAll();showToast('تم اعتماد القراءة وإصدار الفاتورة');}

        function renderUsers() {
            const total = appData.users.length;
            const active = appData.users.filter(u => u.status === 'ACTIVE').length;
            const inactive = total - active;

            document.getElementById('user-kpi-total').textContent = total + ' حساب';
            document.getElementById('user-kpi-active').textContent = active + ' نشط';
            document.getElementById('user-kpi-inactive').textContent = inactive + ' معطل';

            const searchVal = (document.getElementById('user-search-input')?.value || '').toLowerCase();
            const tbody = document.getElementById('users-table-body');
            if (!tbody) return;

            const filtered = appData.users.filter(u =>
                !searchVal ||
                u.fullName.toLowerCase().includes(searchVal) ||
                u.username.toLowerCase().includes(searchVal) ||
                u.role.toLowerCase().includes(searchVal)
            );

            tbody.innerHTML = filtered.map(u => `
                <tr class="hover:bg-slate-50 border-b border-slate-100">
                    <td class="p-3 font-bold text-slate-800">${u.fullName}</td>
                    <td class="p-3 font-mono text-slate-600">@${u.username}</td>
                    <td class="p-3">
                        <span class="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">
                            ${u.role}
                        </span>
                    </td>
                    <td class="p-3 text-slate-500">${u.phone || '--'}</td>
                    <td class="p-3 text-slate-400">${u.createdAt || '--'}</td>
                    <td class="p-3">
                        <span class="px-2 py-0.5 rounded font-bold text-[10px] ${u.status === 'ACTIVE' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}">
                            ${u.status === 'ACTIVE' ? 'نشط' : 'معطل'}
                        </span>
                    </td>
                    <td class="p-3 text-center space-x-1 space-x-reverse">
                        <button type="button" onclick="toggleUserStatus('${u.id}')" title="تفعيل أو تعطيل" class="bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-1 rounded font-bold border border-slate-300 cursor-pointer">
                            <i class="fa-solid fa-power-off ${u.status === 'ACTIVE' ? 'text-rose-600' : 'text-emerald-600'}"></i>
                        </button>
                        <button type="button" onclick="deleteUser('${u.id}')" title="حذف الحساب" class="bg-rose-50 hover:bg-rose-100 text-rose-700 px-2 py-1 rounded font-bold border border-rose-200 cursor-pointer">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `).join('');
        }

        
        let authenticatedUserId = null;

        function checkAuthSession() {
            const savedUid = sessionStorage.getItem('edzakh_logged_user_id');
            const overlay = document.getElementById('appAuthOverlay');
            if (savedUid) {
                const u = appData.users.find(usr => usr.id === savedUid && usr.status === 'ACTIVE');
                if (u) {
                    authenticatedUserId = u.id;
                    appData.currentUser = `${u.role} (${u.fullName})`;
                    if (overlay) overlay.classList.add('hidden');
                    renderActiveUserDisplay();
                    if(isWaterReaderSession())enterSector('water');else openSectorChooser();
                    return true;
                }
            }
            authenticatedUserId = null;
            if (overlay) overlay.classList.remove('hidden');
            renderLoginUserDropdown();
            return false;
        }

        function renderLoginUserDropdown() {
            const select = document.getElementById('loginUserSelect');
            if (!select) return;
            select.innerHTML = '';
            const activeUsers = appData.users.filter(u => u.status === 'ACTIVE');
            activeUsers.forEach(u => {
                const opt = document.createElement('option');
                opt.value = u.id;
                opt.textContent = `${u.fullName} - ${u.role} (@${u.username})`;
                select.appendChild(opt);
            });
        }

        function handleLoginSubmit(e) {
            e.preventDefault();
            const userId = document.getElementById('loginUserSelect').value;
            const pwdInput = document.getElementById('loginPasswordInput').value.trim();
            const user = appData.users.find(u => u.id === userId && u.status === 'ACTIVE');

            if (!user) {
                showToast("الحساب غير موجود أو معطل", true);
                return;
            }

            const expectedPwd = user.passwordHash || '123456';
            if (pwdInput !== expectedPwd) {
                showToast("كلمة السر غير صحيحة", true);
                return;
            }

            authenticatedUserId = user.id;
            sessionStorage.setItem('edzakh_logged_user_id', user.id);
            appData.currentUser = `${user.role} (${user.fullName})`;
            saveState();

            document.getElementById('loginPasswordInput').value = '';
            document.getElementById('appAuthOverlay').classList.add('hidden');

            logAudit("تسجيل دخول", `دخول الناجح للمستخدم: ${user.fullName} (${user.role})`);
            renderAll();
            if(isWaterReaderSession())enterSector('water');else openSectorChooser();
            showToast(`أهلاً بك، ${user.fullName}`);
        }

        function logoutCurrentSession() {
            sessionStorage.removeItem('edzakh_logged_user_id');
            authenticatedUserId = null;
            checkAuthSession();
            showToast("تم تسجيل الخروج بنجاح");
        }

        function renderActiveUserDisplay() {
            const disp = document.getElementById('activeUserDisplay');
            if (disp) {
                disp.textContent = appData.currentUser || "المستخدم";
            }
        }

        function togglePasswordVisibility(inputId) {
            const el = document.getElementById(inputId);
            if (el) el.type = el.type === 'password' ? 'text' : 'password';
        }

        function handleChangePasswordSubmit(e) {
            e.preventDefault();
            const oldPwd = document.getElementById('pwd-old').value.trim();
            const newPwd = document.getElementById('pwd-new').value.trim();
            const confirmPwd = document.getElementById('pwd-confirm').value.trim();

            const user = appData.users.find(u => u.id === authenticatedUserId);
            if (!user) {
                showToast("يرجى تسجيل الدخول أولاً", true);
                return;
            }

            if (oldPwd !== (user.passwordHash || '123456')) {
                showToast("كلمة السر الحالية غير صحيحة", true);
                return;
            }

            if (newPwd.length < 4) {
                showToast("كلمة السر الجديدة يجب أن تتكون من 4 خانات على الأقل", true);
                return;
            }

            if (newPwd !== confirmPwd) {
                showToast("كلمة السر الجديدة غير مطابقة للتأكيد", true);
                return;
            }

            user.passwordHash = newPwd;
            logAudit("تغيير كلمة السر", `تغيير كلمة السر للحساب: ${user.fullName}`);
            saveState();
            e.target.reset();
            closeModal('modalChangePassword');
            showToast("تم تغيير كلمة السر بنجاح");
        }

        function handleAddUserSubmit(e) {
            e.preventDefault();
            const fullName = document.getElementById('usr-fullname').value.trim();
            const username = document.getElementById('usr-username').value.trim();
            const role = document.getElementById('usr-role').value;
            const phone = document.getElementById('usr-phone').value.trim();

            if (appData.users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
                showToast("اسم المستخدم موجود سابقاً، يرجى اختيار اسم آخر", true);
                return;
            }

            const autoPwd = document.getElementById('usr-password')?.value.trim() || '123456';
            appData.users.unshift({
                id: "USR-" + Math.floor(Math.random() * 899 + 100),
                fullName,
                username,
                passwordHash: autoPwd,
                role,
                phone,
                status: "ACTIVE",
                createdAt: new Date().toISOString().split('T')[0]
            });

            logAudit("إضافة مستخدم", `إضافة حساب: ${fullName} (${role})`);
            saveState();
            e.target.reset();
            closeModal('modalAddUser');
            renderAll();
            showToast("تم إضافة المستخدم بنجاح");
        }

        function toggleUserStatus(userId) {
            const user = appData.users.find(u => u.id === userId);
            if (!user) return;
            const activeCount = appData.users.filter(u => u.status === 'ACTIVE').length;
            if (user.status === 'ACTIVE' && activeCount <= 1) {
                showToast("يجب إبقاء مستخدم نشط واحد على الأقل", true);
                return;
            }
            user.status = user.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
            logAudit("تعديل مستخدم", `تغيير حالة ${user.fullName} إلى ${user.status}`);
            saveState();
            renderAll();
            showToast("تم تحديث حالة المستخدم");
        }

        function deleteUser(userId) {
            const user = appData.users.find(u => u.id === userId);
            if (!user) return;
            if (appData.users.length <= 1) {
                showToast("لا يمكن حذف المستخدم الأخير في النظام", true);
                return;
            }
            appData.users = appData.users.filter(u => u.id !== userId);
            logAudit("حذف مستخدم", `حذف حساب ${user.fullName}`);
            saveState();
            renderAll();
            showToast("تم حذف المستخدم من النظام");
        }

        function downloadRowsAsExcelOrCsv(rows, baseFilename, sheetName = 'البيانات') {
            if (typeof XLSX !== 'undefined') {
                const ws = XLSX.utils.json_to_sheet(rows);
                ws['!dir'] = 'rtl';
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, sheetName.slice(0, 31));
                XLSX.writeFile(wb, `${baseFilename}.xlsx`);
                return;
            }
            const headers = Object.keys(rows[0] || {});
            const escapeCsv = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
            const csv = "\uFEFF" + [headers.map(escapeCsv).join(','), ...rows.map(r => headers.map(h => escapeCsv(r[h])).join(','))].join('\n');
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${baseFilename}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        function parseTabularFile(file, callback) {
            const ext = (file.name.split('.').pop() || '').toLowerCase();
            if (ext === 'json') {
                const reader = new FileReader();
                reader.onload = e => {
                    try {
                        const raw = JSON.parse(e.target.result);
                        callback(Array.isArray(raw) ? raw : (raw.rows || raw.data || []));
                    } catch (err) {
                        showToast("ملف JSON غير صالح", true);
                    }
                };
                reader.readAsText(file);
                return;
            }

            if (typeof XLSX !== 'undefined') {
                const reader = new FileReader();
                reader.onload = e => {
                    try {
                        const data = new Uint8Array(e.target.result);
                        const wb = XLSX.read(data, { type: 'array' });
                        const sheet = wb.Sheets[wb.SheetNames[0]];
                        callback(XLSX.utils.sheet_to_json(sheet, { defval: '' }));
                    } catch (err) {
                        showToast("تعذر قراءة ملف الجدول", true);
                    }
                };
                reader.readAsArrayBuffer(file);
                return;
            }

            const reader = new FileReader();
            reader.onload = e => {
                const text = String(e.target.result || '').replace(/^\uFEFF/, '');
                const lines = text.split(/\r?\n/).filter(l => l.trim() !== '');
                if (lines.length < 2) return callback([]);
                const delim = lines[0].includes(';') ? ';' : ',';
                const splitLine = line => {
                    const out = [];
                    let cur = '';
                    let inQuotes = false;
                    for (let i = 0; i < line.length; i++) {
                        const ch = line[i];
                        if (ch === '"') {
                            if (inQuotes && line[i + 1] === '"') { cur += '"'; i++; }
                            else inQuotes = !inQuotes;
                        } else if (ch === delim && !inQuotes) {
                            out.push(cur.trim());
                            cur = '';
                        } else {
                            cur += ch;
                        }
                    }
                    out.push(cur.trim());
                    return out;
                };
                const headers = splitLine(lines[0]);
                const rows = lines.slice(1).map(l => {
                    const vals = splitLine(l);
                    const obj = {};
                    headers.forEach((h, i) => { obj[h] = vals[i] ?? ''; });
                    return obj;
                });
                callback(rows);
            };
            reader.readAsText(file);
        }

        function getSectorFilteredRows(sector, projectFilter = 'ALL') {
            if (sector === 'transactions') {
                return appData.transactions
                    .filter(t => projectFilter === 'ALL' || t.projectId === projectFilter)
                    .map(t => {
                        const prj = appData.projects.find(p => p.id === t.projectId);
                        return {
                            'رقم الوصل': t.receiptNo,
                            'التاريخ': t.date,
                            'النوع': t.type === 'INCOME' ? 'مدخول' : 'مصروف',
                            'المشروع': prj ? prj.name : '',
                            'التصنيف': t.category || '',
                            'الطرف الثاني': t.party || '',
                            'طريقة الأداء': t.method || '',
                            'المسؤول': t.receiver || '',
                            'المبلغ': Number(t.amount) || 0,
                            'السبب / البيان': t.reason || ''
                        };
                    });
            }
            if (sector === 'projects') {
                return appData.projects
                    .filter(p => projectFilter === 'ALL' || p.id === projectFilter)
                    .map(p => {
                        const st = getProjectStats(p.id);
                        return {
                            'اسم المشروع': p.name,
                            'تاريخ البداية': p.startDate || '',
                            'المسؤول': p.manager || '',
                            'الميزانية': Number(p.budget) || 0,
                            'المداخيل': st.incomes,
                            'المصاريف': st.expenses,
                            'الرصيد الصافي': st.balance,
                            'الحالة': p.status || 'ACTIVE'
                        };
                    });
            }
            if (sector === 'residents') {
                return appData.residents.map(r => {
                    const total = Number(r.duesTotal) || 0;
                    const paid = Number(r.duesPaid) || 0;
                    return {
                        'رقم الأسرة': r.familyId,
                        'رب الأسرة': r.headName,
                        'الدوار / المنطقة': r.region || '',
                        'عدد الأفراد': Number(r.membersCount) || 1,
                        'المستحقات': total,
                        'المؤداة': paid,
                        'المتبقي': Math.max(0, total - paid)
                    };
                });
            }
            if (sector === 'water') {
                return appData.waterInvoices.map(inv => ({
                    'رقم الفاتورة': inv.id,
                    'المشترك': inv.subName,
                    'رقم العداد': inv.meterNo,
                    'الفترة': inv.period || '',
                    'القراءة السابقة': Number(inv.prevReading) || 0,
                    'القراءة الحالية': Number(inv.currReading) || 0,
                    'الاستهلاك (م3)': Number(inv.consumption) || 0,
                    'التعرفة': Number(inv.tariff) || Number(appData.settings.waterTariff) || 5,
                    'المبلغ': Number(inv.total) || 0,
                    'الحالة': inv.status === 'PAID' ? 'مؤداة' : 'غير مؤداة'
                }));
            }
            if (sector === 'custody') {
                return appData.advances
                    .filter(a => projectFilter === 'ALL' || a.projectId === projectFilter)
                    .map(a => {
                        const prj = appData.projects.find(p => p.id === a.projectId);
                        const amt = Number(a.amount) || 0;
                        const paid = Number(a.paidAmount) || 0;
                        return {
                            'التاريخ': a.date,
                            'المسؤول الدائن': a.creditor,
                            'المشروع': prj ? prj.name : '',
                            'السبب': a.reason || '',
                            'المبلغ الأصلي': amt,
                            'المسدد': paid,
                            'المتبقي': Math.max(0, amt - paid)
                        };
                    });
            }
            return [];
        }

        function getSectorTemplateHeaders(sector) {
            if (sector === 'transactions') {
                return [{ 'رقم الوصل': '', 'التاريخ': '2026-05-10', 'النوع': 'مدخول', 'المشروع': appData.projects[0]?.name || '', 'التصنيف': 'تبرع محسن', 'الطرف الثاني': '', 'طريقة الأداء': 'نقداً (كاش)', 'المسؤول': appData.currentUser, 'المبلغ': 0, 'السبب / البيان': '' }];
            }
            if (sector === 'projects') {
                return [{ 'اسم المشروع': '', 'تاريخ البداية': '2026-05-01', 'المسؤول': 'مكتب الجمعية', 'الميزانية': 0, 'المداخيل': 0, 'المصاريف': 0, 'الرصيد الصافي': 0, 'الحالة': 'ACTIVE' }];
            }
            if (sector === 'residents') {
                return [{ 'رقم الأسرة': '', 'رب الأسرة': '', 'الدوار / المنطقة': '', 'عدد الأفراد': 1, 'المستحقات': 0, 'المؤداة': 0, 'المتبقي': 0 }];
            }
            if (sector === 'water') {
                return [{ 'رقم الفاتورة': '', 'المشترك': '', 'رقم العداد': '', 'الفترة': '', 'القراءة السابقة': 0, 'القراءة الحالية': 0, 'الاستهلاك (م3)': 0, 'التعرفة': Number(appData.settings.waterTariff) || 5, 'المبلغ': 0, 'الحالة': 'غير مؤداة' }];
            }
            if (sector === 'custody') {
                return [{ 'التاريخ': '2026-05-10', 'المسؤول الدائن': '', 'المشروع': appData.projects[0]?.name || '', 'السبب': '', 'المبلغ الأصلي': 0, 'المسدد': 0, 'المتبقي': 0 }];
            }
            return [];
        }

        function exportSectorExcel(asEmptyTemplate = false) {
            const sector = document.getElementById('report-excel-sector')?.value || 'transactions';
            const projectFilter = document.getElementById('report-excel-project')?.value || 'ALL';
            const rows = asEmptyTemplate ? getSectorTemplateHeaders(sector) : getSectorFilteredRows(sector, projectFilter);
            const suffix = asEmptyTemplate ? 'قالب_فارغ' : 'أرشيف_بيانات';
            downloadRowsAsExcelOrCsv(rows.length ? rows : getSectorTemplateHeaders(sector), `جمعية_إدزاح_${sector}_${suffix}`, sector);
            logAudit("تصدير إكسل", `${asEmptyTemplate ? 'تحميل قالب فارغ' : 'تصدير أرشيف'} قطاع: ${sector}`);
            showToast(asEmptyTemplate ? "تم تحميل قالب الإكسل الفارغ" : "تم تصدير ملف البيانات بنجاح");
        }

        function exportGlobalIo(asEmptyTemplate = false) {
            const sector = document.getElementById('global-io-sector')?.value || 'transactions';
            const rows = asEmptyTemplate ? getSectorTemplateHeaders(sector) : getSectorFilteredRows(sector, 'ALL');
            const suffix = asEmptyTemplate ? 'قالب_فارغ' : 'بيانات';
            downloadRowsAsExcelOrCsv(rows.length ? rows : getSectorTemplateHeaders(sector), `جمعية_إدزاح_${sector}_${suffix}`, sector);
            showToast(asEmptyTemplate ? "تم تحميل القالب الفارغ" : "تم تصدير البيانات بنجاح");
        }

        function importGlobalIo() {
            const fileInput = document.getElementById('global-io-file');
            const sector = document.getElementById('global-io-sector')?.value || 'transactions';
            if (!fileInput || !fileInput.files || !fileInput.files.length) {
                showToast("يرجى اختيار ملف أولاً", true);
                return;
            }
            applySectorRowsImport(fileInput.files[0], sector, 'ALL', () => {
                fileInput.value = '';
                closeModal('modalGlobalIo');
            });
        }

        function handleReportExcelImport() {
            const fileInput = document.getElementById('report-excel-file');
            const sector = document.getElementById('report-excel-sector')?.value || 'transactions';
            const selectedProjectId = document.getElementById('report-excel-project')?.value || 'ALL';

            if (!fileInput || !fileInput.files || !fileInput.files.length) {
                showToast("يرجى اختيار ملف إكسل (.xlsx أو .csv) أولاً", true);
                return;
            }
            applySectorRowsImport(fileInput.files[0], sector, selectedProjectId, () => {
                fileInput.value = '';
            });
        }

        function applySectorRowsImport(file, sector, selectedProjectId, onDone) {
            parseTabularFile(file, rows => {
                if (!rows.length) {
                    showToast("الملف المستورد فارغ", true);
                    return;
                }
                let importedCount = 0;

                if (sector === 'transactions') {
                    rows.forEach((r, idx) => {
                        const amount = parseFloat(r['المبلغ'] ?? r['amount'] ?? 0);
                        const party = String(r['الطرف الثاني'] ?? r['party'] ?? '').trim();
                        if (!amount || amount <= 0) return;

                        const rawType = String(r['النوع'] ?? r['type'] ?? 'مدخول').trim();
                        const isExpense = rawType.includes('مصروف') || rawType.toUpperCase() === 'EXPENSE';
                        const prjName = String(r['المشروع'] ?? '').trim();
                        const matchedPrj = appData.projects.find(p => p.name === prjName);
                        const resolvedProjectId = matchedPrj ? matchedPrj.id : (selectedProjectId !== 'ALL' ? selectedProjectId : (appData.projects[0]?.id || ''));

                        appData.transactions.unshift({
                            id: "TRX-IMP-" + Date.now() + "-" + idx,
                            receiptNo: String(r['رقم الوصل'] || '').trim() || ("IMP-" + String(appData.transactions.length + 1).padStart(3, '0')),
                            date: String(r['التاريخ'] || new Date().toISOString().split('T')[0]).trim(),
                            type: isExpense ? 'EXPENSE' : 'INCOME',
                            projectId: resolvedProjectId,
                            category: String(r['التصنيف'] || (isExpense ? 'أخرى' : 'تبرع محسن')).trim(),
                            party: party || 'مستورد من ملف',
                            amount,
                            method: String(r['طريقة الأداء'] || 'نقداً (كاش)').trim(),
                            receiver: String(r['المسؤول'] || appData.currentUser).trim(),
                            reason: String(r['السبب / البيان'] || 'أرشيف مستورد').trim()
                        });
                        importedCount++;
                    });
                } else if (sector === 'projects') {
                    rows.forEach((r, idx) => {
                        const name = String(r['اسم المشروع'] ?? r['name'] ?? '').trim();
                        if (!name) return;
                        appData.projects.push({
                            id: "p_imp_" + Date.now() + "_" + idx,
                            name,
                            startDate: String(r['تاريخ البداية'] || new Date().toISOString().split('T')[0]).trim(),
                            manager: String(r['المسؤول'] || 'مكتب الجمعية').trim(),
                            budget: parseFloat(r['الميزانية'] ?? 0) || 0,
                            status: 'ACTIVE'
                        });
                        importedCount++;
                    });
                } else if (sector === 'residents') {
                    rows.forEach((r, idx) => {
                        const headName = String(r['رب الأسرة'] ?? r['headName'] ?? '').trim();
                        if (!headName) return;
                        appData.residents.unshift({
                            id: "H-IMP-" + Date.now() + "-" + idx,
                            familyId: String(r['رقم الأسرة'] ?? ('F-' + (appData.residents.length + 1))).trim(),
                            headName,
                            region: String(r['الدوار / المنطقة'] ?? 'دوار إدزاح').trim(),
                            membersCount: parseInt(r['عدد الأفراد'] ?? 1, 10) || 1,
                            duesTotal: parseFloat(r['المستحقات'] ?? 0) || 0,
                            duesPaid: parseFloat(r['المؤداة'] ?? 0) || 0
                        });
                        importedCount++;
                    });
                } else if (sector === 'water') {
                    rows.forEach((r, idx) => {
                        const subName = String(r['المشترك'] ?? r['subName'] ?? '').trim();
                        if (!subName) return;
                        const prevR = parseFloat(r['القراءة السابقة'] ?? 0) || 0;
                        const currR = parseFloat(r['القراءة الحالية'] ?? prevR) || prevR;
                        const cons = parseFloat(r['الاستهلاك (م3)'] ?? Math.max(0, currR - prevR)) || 0;
                        const tariff = parseFloat(r['التعرفة'] ?? appData.settings.waterTariff ?? 5) || 5;
                        const total = parseFloat(r['المبلغ'] ?? (cons * tariff)) || 0;
                        const rawStatus = String(r['الحالة'] ?? '').trim();
                        const isPaid = rawStatus.includes('مؤداة') || rawStatus.toUpperCase() === 'PAID';

                        appData.waterInvoices.unshift({
                            id: String(r['رقم الفاتورة'] || '').trim() || ("INV-IMP-" + Date.now() + "-" + idx),
                            subId: "SUB-IMP-" + idx,
                            subName,
                            meterNo: String(r['رقم العداد'] ?? '').trim(),
                            period: String(r['الفترة'] ?? '').trim(),
                            prevReading: prevR,
                            currReading: currR,
                            consumption: cons,
                            tariff,
                            total,
                            status: isPaid ? 'PAID' : 'UNPAID'
                        });
                        importedCount++;
                    });
                } else if (sector === 'custody') {
                    rows.forEach((r, idx) => {
                        const creditor = String(r['المسؤول الدائن'] ?? '').trim();
                        const amount = parseFloat(r['المبلغ الأصلي'] ?? 0) || 0;
                        if (!creditor || amount <= 0) return;
                        const prjName = String(r['المشروع'] ?? '').trim();
                        const matchedPrj = appData.projects.find(p => p.name === prjName);
                        appData.advances.unshift({
                            id: "ADV-IMP-" + Date.now() + "-" + idx,
                            creditor,
                            projectId: matchedPrj ? matchedPrj.id : (selectedProjectId !== 'ALL' ? selectedProjectId : (appData.projects[0]?.id || '')),
                            amount,
                            paidAmount: parseFloat(r['المسدد'] ?? 0) || 0,
                            date: String(r['التاريخ'] || new Date().toISOString().split('T')[0]).trim(),
                            reason: String(r['السبب'] || 'سلفة مستوردة').trim()
                        });
                        importedCount++;
                    });
                }

                logAudit("استيراد إكسل", `استيراد ${importedCount} سجل إلى قطاع (${sector}) من الملف ${file.name}`);
                saveState();
                if (typeof onDone === 'function') onDone();
                renderAll();
                showToast(`تم استيراد وأرشفة ${importedCount} سجل بنجاح`);
            });
        }

        function renderReportsAndAudit() {
            const sector = document.getElementById('report-excel-sector')?.value || 'transactions';
            const projectFilter = document.getElementById('report-excel-project')?.value || 'ALL';
            const countEl = document.getElementById('report-sector-count');
            if (countEl) {
                const count = getSectorFilteredRows(sector, projectFilter).length;
                countEl.textContent = `عدد السجلات المتاحة في القطاع: ${count}`;
            }

            const prjSummaryDiv = document.getElementById('report-projects-summary');
            prjSummaryDiv.innerHTML = appData.projects.length
                ? appData.projects.map(p => {
                    const st = getProjectStats(p.id);
                    return `
                        <div class="p-2.5 bg-slate-50 rounded border flex justify-between items-center">
                            <span class="font-bold text-slate-800">${p.name}</span>
                            <span class="font-black ${st.balance >= 0 ? 'text-emerald-700' : 'text-rose-600'}">${st.balance.toLocaleString()} د.م.</span>
                        </div>
                    `;
                }).join('')
                : '<p class="text-slate-400">لا توجد مشاريع مسجلة حالياً.</p>';

            let totalInc = 0, totalExp = 0, presIn = 0, presOut = 0, treasIn = 0, treasOut = 0;
            appData.transactions.forEach(t => {
                if (t.type === 'INCOME') totalInc += Number(t.amount);
                if (t.type === 'EXPENSE') totalExp += Number(t.amount);
                if (String(t.receiver || '').includes("الرئيس")) {
                    if (t.type === 'INCOME') presIn += Number(t.amount);
                    if (t.type === 'EXPENSE') presOut += Number(t.amount);
                } else if (String(t.receiver || '').includes("أمين المال")) {
                    if (t.type === 'INCOME') treasIn += Number(t.amount);
                    if (t.type === 'EXPENSE') treasOut += Number(t.amount);
                }
            });

            document.getElementById('report-total-inc').textContent = totalInc.toLocaleString() + ' د.م.';
            document.getElementById('report-total-exp').textContent = totalExp.toLocaleString() + ' د.م.';
            document.getElementById('report-net-bal').textContent = (totalInc - totalExp).toLocaleString() + ' د.م.';
            document.getElementById('report-cust-pres').textContent = (presIn - presOut).toLocaleString() + ' د.م.';
            document.getElementById('report-cust-treas').textContent = (treasIn - treasOut).toLocaleString() + ' د.م.';

            const auditBody = document.getElementById('audit-log-table-body');
            auditBody.innerHTML = appData.auditLogs.length
                ? appData.auditLogs.slice(0, 40).map(l => `
                    <tr class="hover:bg-slate-50 border-b border-slate-100">
                        <td class="p-2 text-slate-500">${l.timestamp}</td>
                        <td class="p-2 font-bold text-slate-800">${l.user}</td>
                        <td class="p-2"><span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold">${l.type}</span></td>
                        <td class="p-2 text-slate-600">${l.details}</td>
                    </tr>
                `).join('')
                : '<tr><td colspan="4" class="p-4 text-center text-slate-400">سجل التدقيق فارغ حالياً.</td></tr>';
        }

        function downloadResidentsImportTemplate() {
            const sample = [{
                'رقم الأسرة': 'F-20',
                'رب الأسرة': 'مثال: سعيد إدبوكا',
                'الدوار / المنطقة': 'دوار إدزاح المركز',
                'عدد الأفراد': 4,
                'رقم الهاتف': '0600000000',
                'المستحقات السابقة': 0,
                'المؤدى السابق': 0
            }];
            downloadRowsAsExcelOrCsv(sample, 'قالب_استيراد_الساكنة_جمعية_إدزاح', 'الساكنة');
            showToast("تم تحميل قالب استيراد الساكنة");
        }

        function areNamesSimilar(a, b) {
            const cleanA = String(a || '').replace(/\s+/g, ' ').trim().toLowerCase();
            const cleanB = String(b || '').replace(/\s+/g, ' ').trim().toLowerCase();
            if (!cleanA || !cleanB) return false;
            if (cleanA === cleanB) return true;
            return cleanA.includes(cleanB) || cleanB.includes(cleanA);
        }

        function handleResidentsFileSelected(event) {
            const file = event.target.files && event.target.files[0];
            const previewBox = document.getElementById('residents-import-preview-box');
            const confirmBtn = document.getElementById('btn-confirm-residents-import');
            pendingResidentsImport = [];
            pendingResidentsFileMeta = null;

            if (!file) {
                previewBox?.classList.add('hidden');
                if (confirmBtn) confirmBtn.disabled = true;
                return;
            }

            parseTabularFile(file, rows => {
                const parsed = [];
                let duplicateCount = 0;

                rows.forEach((r, idx) => {
                    const headName = String(
                        r['رب الأسرة'] || r['اسم العائلة'] || r['الاسم الكامل'] || r['headName'] || r['name'] || ''
                    ).trim();
                    if (!headName) return;

                    const familyId = String(
                        r['رقم الأسرة'] || r['familyId'] || r['id'] || ('F-' + (appData.residents.length + parsed.length + 10))
                    ).trim();
                    const region = String(
                        r['الدوار / المنطقة'] || r['الدوار'] || r['المنطقة'] || r['region'] || 'دوار إدزاح المركز'
                    ).trim();
                    const membersCount = parseInt(r['عدد الأفراد'] || r['membersCount'] || 1, 10) || 1;
                    const phone = String(r['رقم الهاتف'] || r['الهاتف'] || r['phone'] || '').trim();
                    const duesTotal = parseFloat(r['المستحقات السابقة'] || r['المستحقات'] || r['duesTotal'] || 0) || 0;
                    const duesPaid = parseFloat(r['المؤدى السابق'] || r['المؤدى'] || r['duesPaid'] || 0) || 0;

                    const isExactFamily = appData.residents.some(ex => String(ex.familyId).trim().toLowerCase() === familyId.toLowerCase());
                    const isSimilarName = appData.residents.some(ex => areNamesSimilar(ex.headName, headName));
                    const isDupInBatch = parsed.some(p => p.familyId.toLowerCase() === familyId.toLowerCase() || areNamesSimilar(p.headName, headName));

                    let flag = 'جديد';
                    if (isExactFamily || isDupInBatch) {
                        flag = 'مكرر';
                        duplicateCount++;
                    } else if (isSimilarName) {
                        flag = 'اسم مشابه';
                        duplicateCount++;
                    }

                    parsed.push({
                        rowIndex: idx + 1,
                        selected: true,
                        familyId,
                        headName,
                        region,
                        membersCount,
                        phone,
                        duesTotal,
                        duesPaid,
                        flag
                    });
                });

                pendingResidentsImport = parsed;
                pendingResidentsFileMeta = {
                    fileName: file.name,
                    importedAt: new Date().toLocaleDateString('ar-MA'),
                    count: parsed.length
                };

                const tbody = document.getElementById('residents-preview-tbody');
                const countEl = document.getElementById('residents-preview-count');
                const warnEl = document.getElementById('residents-import-warnings');

                if (countEl) countEl.textContent = `${parsed.length} أسرة جاهزة للمعاينة`;
                if (warnEl) {
                    warnEl.innerHTML = duplicateCount > 0
                        ? `<p class="font-bold"><i class="fa-solid fa-triangle-exclamation"></i> تنبيه: تم رصد ${duplicateCount} حالة تكرار أو تشابه في الأسماء/أرقام الأسر — يمكنك إلغاء تحديد أي صف أو اعتماده.</p>`
                        : `<p class="font-bold text-emerald-800"><i class="fa-solid fa-circle-check"></i> تم فحص اللائحة بنجاح ولا توجد أسماء مكررة أو متعارضة.</p>`;
                }

                if (tbody) {
                    tbody.innerHTML = parsed.map((item, i) => `
                        <tr class="hover:bg-slate-50">
                            <td class="p-2 text-center"><input type="checkbox" checked onchange="togglePendingResidentRow(${i}, this.checked)" class="rounded" /></td>
                            <td class="p-2 font-mono">${item.familyId}</td>
                            <td class="p-2 font-bold">${item.headName}</td>
                            <td class="p-2 text-slate-600">${item.region}</td>
                            <td class="p-2">${item.membersCount}</td>
                            <td class="p-2">${item.duesTotal.toLocaleString()}</td>
                            <td class="p-2">${item.duesPaid.toLocaleString()}</td>
                            <td class="p-2">
                                <span class="px-2 py-0.5 rounded text-[10px] font-bold ${
                                    item.flag === 'جديد'
                                        ? 'bg-emerald-100 text-emerald-800'
                                        : 'bg-amber-100 text-amber-800'
                                }">${item.flag}</span>
                            </td>
                        </tr>
                    `).join('') || '<tr><td colspan="8" class="p-3 text-center text-slate-400">لم يتم العثور على صفوف صالحة في الملف</td></tr>';
                }

                previewBox?.classList.remove('hidden');
                if (confirmBtn) confirmBtn.disabled = parsed.length === 0;
            });
        }

        function togglePendingResidentRow(index, checked) {
            if (pendingResidentsImport[index]) {
                pendingResidentsImport[index].selected = Boolean(checked);
            }
            const activeCount = pendingResidentsImport.filter(x => x.selected).length;
            const countEl = document.getElementById('residents-preview-count');
            if (countEl) countEl.textContent = `${activeCount} أسرة محددة للحفظ`;
            const confirmBtn = document.getElementById('btn-confirm-residents-import');
            if (confirmBtn) confirmBtn.disabled = activeCount === 0;
        }

        function confirmResidentsImport() {
            const selectedRows = pendingResidentsImport.filter(x => x.selected);
            if (!selectedRows.length) {
                showToast("لا توجد بيانات ساكنة محددة للاستيراد", true);
                return;
            }

            let addedCount = 0;
            let updatedCount = 0;

            selectedRows.forEach((item, idx) => {
                const existing = appData.residents.find(
                    r => String(r.familyId).trim().toLowerCase() === item.familyId.toLowerCase()
                );

                if (existing) {
                    existing.headName = item.headName || existing.headName;
                    existing.region = item.region || existing.region;
                    existing.membersCount = item.membersCount || existing.membersCount;
                    if (item.phone) existing.phone = item.phone;
                    if (item.duesTotal > 0 || item.duesPaid > 0) {
                        existing.duesTotal = Math.max(Number(existing.duesTotal) || 0, item.duesTotal);
                        existing.duesPaid = Math.max(Number(existing.duesPaid) || 0, item.duesPaid);
                    }
                    updatedCount++;
                } else {
                    const newId = "H-IMP-" + Date.now() + "-" + idx;
                    appData.residents.unshift({
                        id: newId,
                        headName: item.headName,
                        familyId: item.familyId,
                        region: item.region,
                        phone: item.phone,
                        membersCount: item.membersCount,
                        duesPaid: item.duesPaid,
                        duesTotal: item.duesTotal
                    });

                    if (item.duesTotal > 0) {
                        const priorDueId = "DUE-PRIOR-" + item.familyId + "-" + idx;
                        if (!appData.dues.some(d => d.id === priorDueId)) {
                            appData.dues.push({
                                id: priorDueId,
                                title: `مستحقات سابقة (${item.headName})`,
                                amount: item.duesTotal,
                                calcType: "أسري",
                                targetProjectId: appData.projects[0]?.id || '',
                                periodType: "OLD",
                                status: Math.max(0, item.duesTotal - item.duesPaid) === 0 ? "CLOSED" : "OPEN",
                                createdAt: pendingResidentsFileMeta?.importedAt || new Date().toISOString().split('T')[0]
                            });
                        }
                        appData.dueRecords.push({
                            id: "DR-" + priorDueId + "-" + newId,
                            dueId: priorDueId,
                            residentId: newId,
                            requiredAmount: item.duesTotal,
                            paidAmount: item.duesPaid,
                            payments: item.duesPaid > 0 ? [{ date: pendingResidentsFileMeta?.importedAt || new Date().toISOString().split('T')[0], amount: item.duesPaid, receiptNo: "IMPORT" }] : []
                        });
                    }

                    appData.dues.forEach(d => {
                        if (d.status !== 'CLOSED' && !appData.dueRecords.some(rec => rec.dueId === d.id && rec.residentId === newId)) {
                            const reqAmt = d.calcType === 'فردي' ? Number(d.amount) * item.membersCount : Number(d.amount);
                            appData.dueRecords.push({
                                id: "DR-" + d.id + "-" + newId,
                                dueId: d.id,
                                residentId: newId,
                                requiredAmount: reqAmt,
                                paidAmount: 0,
                                payments: []
                            });
                        }
                    });
                    recalculateResidentDuesTotals(newId);
                    addedCount++;
                }
            });

            if (pendingResidentsFileMeta) {
                appData.importedResidentBatches.unshift({
                    ...pendingResidentsFileMeta,
                    count: selectedRows.length
                });
            }

            const fileInput = document.getElementById('residents-import-file');
            if (fileInput) fileInput.value = '';
            document.getElementById('residents-import-preview-box')?.classList.add('hidden');
            document.getElementById('btn-confirm-residents-import').disabled = true;
            pendingResidentsImport = [];
            pendingResidentsFileMeta = null;

            logAudit("استيراد الساكنة", `استيراد لائحة الساكنة (إضافة ${addedCount} وتحديث ${updatedCount})`);
            saveState();
            closeModal('modalImportExcel');
            renderAll();
            showToast(`تم استيراد لائحة الساكنة بنجاح (جديد: ${addedCount}، محدث: ${updatedCount})`);
        }

        function viewReceipt(trxId) {
            const trx = appData.transactions.find(t => t.id === trxId);
            if (!trx) return;

            const prj = appData.projects.find(p => p.id === trx.projectId);
            document.getElementById('rcpt-assoc-name').textContent = appData.settings.associationName;

            const badge = document.getElementById('rcpt-type-badge');
            badge.textContent = trx.type === 'INCOME' ? 'وصل تسلم ومقبوضات' : 'وصل صرف ومصاريف';
            badge.className = trx.type === 'INCOME'
                ? 'inline-block bg-emerald-100 text-emerald-800 font-extrabold text-xs px-3 py-1 rounded-full border border-emerald-300'
                : 'inline-block bg-rose-100 text-rose-800 font-extrabold text-xs px-3 py-1 rounded-full border border-rose-300';

            document.getElementById('rcpt-number').textContent = 'N°: ' + trx.receiptNo;
            document.getElementById('rcpt-date').textContent = trx.date;
            document.getElementById('rcpt-project').textContent = prj ? prj.name : 'عام';
            document.getElementById('rcpt-party').textContent = trx.party;
            document.getElementById('rcpt-reason').textContent = trx.reason || trx.category;
            document.getElementById('rcpt-amount').textContent = Number(trx.amount).toLocaleString() + ' د.م.';
            document.getElementById('rcpt-signee').textContent = trx.receiver;

            openModal('modalReceiptViewer');
        }

        function handleAddIncome(e) {
            e.preventDefault();
            const amount = Number(document.getElementById('inc-amount').value);
            const date = document.getElementById('inc-date').value;
            const projectId = document.getElementById('inc-project').value;
            const category = document.getElementById('inc-category').value;
            const party = document.getElementById('inc-payer').value.trim();
            const method = document.getElementById('inc-method').value;
            const receiver = document.getElementById('inc-receiver').value;
            const notes = document.getElementById('inc-notes').value.trim();

            const newTrx = {
                id: "TRX-" + Math.floor(Math.random() * 8999 + 1000),
                receiptNo: "REC-2026-" + String(appData.transactions.length + 1).padStart(3, '0'),
                date,
                type: "INCOME",
                projectId,
                category,
                party,
                amount,
                method,
                receiver,
                reason: notes || category
            };

            appData.transactions.unshift(newTrx);
            logAudit("إضافة مدخول", `تسجيل مدخول بقيمة ${amount} د.م. من ${party}`);
            saveState();
            e.target.reset();
            document.getElementById('inc-date').value = new Date().toISOString().split('T')[0];
            closeModal('modalAddIncome');
            renderAll();
            viewReceipt(newTrx.id);
        }

        function handleAddExpense(e) {
            e.preventDefault();
            const amount = Number(document.getElementById('exp-amount').value);
            const date = document.getElementById('exp-date').value;
            const projectId = document.getElementById('exp-project').value;
            const category = document.getElementById('exp-category').value;
            const beneficiary = document.getElementById('exp-beneficiary').value.trim();
            const payer = document.getElementById('exp-payer').value;
            const method = document.getElementById('exp-method').value;
            const reason = document.getElementById('exp-reason').value.trim();

            const newTrx = {
                id: "TRX-" + Math.floor(Math.random() * 8999 + 1000),
                receiptNo: "EXP-2026-" + String(appData.transactions.length + 1).padStart(3, '0'),
                date,
                type: "EXPENSE",
                projectId,
                category,
                party: beneficiary,
                amount,
                method,
                receiver: payer,
                reason
            };

            appData.transactions.unshift(newTrx);
            logAudit("تسجيل مصروف", `صرف مبلغ ${amount} د.م. لفائدة ${beneficiary}`);
            saveState();
            e.target.reset();
            document.getElementById('exp-date').value = new Date().toISOString().split('T')[0];
            closeModal('modalAddExpense');
            renderAll();
            viewReceipt(newTrx.id);
        }

        function handleInternalTransfer(e) {
            e.preventDefault();
            const fromId = document.getElementById('transfer-from').value;
            const toId = document.getElementById('transfer-to').value;
            const amount = Number(document.getElementById('transfer-amount').value);
            const date = document.getElementById('transfer-date').value;
            const reason = document.getElementById('transfer-reason').value.trim();

            if (fromId === toId) {
                showToast("لا يمكن التحويل إلى نفس المشروع", true);
                return;
            }

            appData.transfers.unshift({
                id: "TRF-" + Math.floor(Math.random() * 899 + 100),
                fromProjectId: fromId,
                toProjectId: toId,
                amount,
                date,
                reason
            });

            logAudit("تحويل بين المشاريع", `تحويل مبلغ ${amount} د.م. (${reason})`);
            saveState();
            e.target.reset();
            document.getElementById('transfer-date').value = new Date().toISOString().split('T')[0];
            closeModal('modalInternalTransfer');
            renderAll();
            showToast("تم تنفيذ التحويل الداخلي بنجاح");
        }

        function handleWaterReadingSubmit(e) {
            e.preventDefault();
            const subId=document.getElementById('water-subscriber-select').value,sub=appData.subscribers.find(x=>x.id===subId),currVal=Number(document.getElementById('water-curr-val').value);
            if(!sub||!Number.isFinite(currVal)||currVal<Number(sub.lastReading||0))return showToast('القراءة الحالية يجب أن تكون أكبر من أو تساوي القراءة السابقة',true);
            const date=document.getElementById('water-reading-date').value||new Date().toISOString().slice(0,10),periodKey=document.getElementById('water-reading-period').value||date.slice(0,7),prev=Number(sub.lastReading||0);
            if((appData.waterReadings||[]).some(r=>r.subId===sub.id&&r.periodKey===periodKey&&r.status!=='REJECTED')||(appData.waterInvoices||[]).some(i=>i.subId===sub.id&&waterInvoiceMonthKey(i)===periodKey))return showToast('سبق تسجيل قراءة أو إصدار فاتورة لهذا المشترك في الفترة المحددة',true);
            const reading={id:'WRD-'+Date.now(),subId:sub.id,subName:sub.name,meterNo:sub.meterNo,prevReading:prev,currReading:currVal,consumption:currVal-prev,date,period:periodKey,periodKey,recordedBy:appData.currentUser,status:'PENDING',createdAt:new Date().toISOString()};
            if(!Array.isArray(appData.waterReadings))appData.waterReadings=[];appData.waterReadings.push(reading);
            if(isWaterReaderSession()&&!isWaterReaderAccountActive())return showToast('تم سحب تفويضك؛ لا يمكنك تسجيل قراءات جديدة',true);
            if(isWaterReaderSession()){sub.lastReading=currVal;logAudit('تسجيل قراءة مفوضة',`${sub.name}؛ ${prev} إلى ${currVal}؛ تنتظر اعتماد المكتب`);saveState();e.target.reset();closeModal('modalWaterReading');renderWater();showToast('تم حفظ القراءة وإرسالها للمكتب لاعتمادها');return;}
            // المكتب المسير يعتمد القراءة فوراً ويصدر فاتورتها
            const tariff=Number(appData.settings.waterTariff||0),consumption=currVal-prev,consumptionAmount=consumption*tariff,connectionFee=sub.connectionFeePaid?0:Number(appData.settings.waterConnectionFee||0),otherFee=Number(appData.settings.waterOtherFee||0),total=Number((consumptionAmount+connectionFee+otherFee).toFixed(2));
            const inv={id:'INV-'+date.slice(0,4)+'-'+String(appData.waterInvoices.length+1).padStart(4,'0'),subId:sub.id,subName:sub.name,meterNo:sub.meterNo,period:periodKey,periodKey,createdAt:date,prevReading:prev,currReading:currVal,consumption,tariff,consumptionAmount,connectionFee,otherFee,otherFeeName:appData.settings.waterOtherFeeName,total,status:'UNPAID',paidAmount:0};
            sub.lastReading=currVal;if(connectionFee>0)sub.connectionFeePaid=true;appData.waterInvoices.unshift(inv);reading.status='APPROVED';reading.invoiceId=inv.id;
            logAudit('تسجيل قراءة وإصدار فاتورة ماء',`${inv.id} للمشترك ${sub.name}؛ ${total} درهم`);saveState();e.target.reset();closeModal('modalWaterReading');renderAll();showToast('تم تسجيل القراءة وإصدار الفاتورة');
        }

        function handleAddSubscriberSubmit(e) {
            e.preventDefault(); if(isWaterReaderSession())return showToast('غير مسموح: صلاحية تسجيل القراءات فقط',true);
            const name = document.getElementById('sub-name').value.trim();
            const meterNo = document.getElementById('sub-meter-no').value.trim();
            const initialRead = Number(document.getElementById('sub-initial-read').value) || 0;
            const phone = document.getElementById('sub-phone').value.trim();
            const whatsappConsent = document.getElementById('sub-wa-consent').checked;
            if (phone && !normalizeMoroccanWhatsAppPhone(phone)) { showToast('رقم الهاتف غير صالح. أدخل رقماً مغربياً من 10 أرقام أو بصيغة دولية', true); return; }
            if (whatsappConsent && !phone) { showToast('أدخل رقم الهاتف قبل تسجيل موافقة واتساب', true); return; }

            if(appData.subscribers.some(x=>x.meterNo===meterNo))return showToast('رقم العداد مسجل لمشترك آخر',true);
            appData.subscribers.push({
                id: "SUB-" + String(appData.subscribers.length + 1).padStart(2, '0'),
                name,
                meterNo,
                phone,
                whatsappConsent,
                isMember: document.getElementById('sub-is-member').checked,
                lastReading: initialRead,
                connectionFeePaid: document.getElementById('sub-connection-paid').checked,
                accessCode: generateSubscriberAccessCode(),
                accessCodeActive: true
            });

            logAudit("مشترك ماء جديد", `إضافة المشترك ${name} عداد ${meterNo}`);
            saveState();
            e.target.reset();
            closeModal('modalAddSubscriber');
            renderAll();
            showToast("تمت إضافة المشترك الجديد");
        }

        function handleAddResidentSubmit(e) {
            e.preventDefault();
            const headName = document.getElementById('res-head-name').value.trim();
            const familyId = document.getElementById('res-family-id').value.trim();
            const membersCount = Number(document.getElementById('res-members-count').value);
            const region = document.getElementById('res-region').value.trim();

            const newResId = "H-" + Math.floor(Math.random() * 8999 + 1000);
            appData.residents.unshift({
                id: newResId,
                headName,
                familyId,
                region,
                phone: "",
                membersCount,
                duesPaid: 0,
                duesTotal: 0
            });

            appData.dues.forEach(d => {
                if (d.status !== 'CLOSED') {
                    const reqAmt = d.calcType === 'فردي' ? Number(d.amount) * membersCount : Number(d.amount);
                    appData.dueRecords.push({
                        id: "DR-" + d.id + "-" + newResId,
                        dueId: d.id,
                        residentId: newResId,
                        requiredAmount: reqAmt,
                        paidAmount: 0,
                        payments: []
                    });
                }
            });
            recalculateResidentDuesTotals(newResId);

            logAudit("إضافة أسرة", `تسجيل أسرة جديدة: ${headName}`);
            saveState();
            e.target.reset();
            closeModal('modalAddResident');
            renderAll();
            showToast("تمت إضافة الأسرة بنجاح");
        }

        function handleAddAdvanceSubmit(e) {
            e.preventDefault();
            const creditor = document.getElementById('adv-creditor').value;
            const projectId = document.getElementById('adv-project').value;
            const amount = Number(document.getElementById('adv-amount').value);
            const date = document.getElementById('adv-date').value;
            const reason = document.getElementById('adv-reason').value.trim();

            appData.advances.unshift({
                id: "ADV-" + Math.floor(Math.random() * 899 + 100),
                creditor,
                projectId,
                amount,
                paidAmount: 0,
                date,
                reason
            });

            logAudit("تسجيل سلفة شخصية", `سلفة من ${creditor} بقيمة ${amount} د.م.`);
            saveState();
            e.target.reset();
            document.getElementById('adv-date').value = new Date().toISOString().split('T')[0];
            closeModal('modalAddAdvance');
            renderAll();
            showToast("تم تسجيل السلفة الشخصية");
        }

        function handleAddProjectSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('prj-name').value.trim();
            const startDate = document.getElementById('prj-start-date').value;
            const budget = Number(document.getElementById('prj-budget').value) || 0;
            const manager = document.getElementById('prj-manager').value.trim();

            appData.projects.push({
                id: "p" + (appData.projects.length + 1) + "_" + Math.floor(Math.random() * 99),
                name,
                budget,
                manager,
                startDate,
                status: "ACTIVE"
            });

            logAudit("إنشاء مشروع", `مشروع جديد: ${name}`);
            saveState();
            e.target.reset();
            document.getElementById('prj-start-date').value = new Date().toISOString().split('T')[0];
            closeModal('modalAddProject');
            renderAll();
            showToast("تم إنشاء المشروع بنجاح");
        }

        function handleCreateDueSubmit(e) {
            e.preventDefault();
            const title = document.getElementById('due-title').value.trim();
            const amount = Number(document.getElementById('due-amount').value);
            const calcType = document.getElementById('due-calc-type').value;
            const targetProjectId = document.getElementById('due-target-project').value;
            const periodType = document.getElementById('due-period-type')?.value || 'CURRENT';

            const newDueId = "DUE-" + Math.floor(Math.random() * 899 + 100);
            appData.dues.unshift({
                id: newDueId,
                title,
                amount,
                calcType,
                targetProjectId,
                periodType,
                status: 'OPEN',
                createdAt: new Date().toISOString().split('T')[0]
            });

            appData.residents.forEach(r => {
                const reqAmt = calcType === 'فردي' ? amount * (Number(r.membersCount) || 1) : amount;
                appData.dueRecords.push({
                    id: "DR-" + newDueId + "-" + r.id,
                    dueId: newDueId,
                    residentId: r.id,
                    requiredAmount: reqAmt,
                    paidAmount: 0,
                    payments: []
                });
                recalculateResidentDuesTotals(r.id);
            });

            logAudit("إعلان واجب جماعي", `إضافة واجب ${title} بمبلغ ${amount} د.م.`);
            saveState();
            e.target.reset();
            closeModal('modalCreateDue');
            renderAll();
            showToast("تم اعتماد الواجب الجماعي وتحديث المستحقات والأرشيف");
        }
    