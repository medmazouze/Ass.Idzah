# تطبيق جمعية إدزاح إدبوكا — مشروع Android

هذا المشروع يغلّف تطبيق الويب الموجود في `www/index.html` داخل تطبيق Android باستخدام Capacitor 6.

## البناء التلقائي المجاني عبر GitHub Actions

1. أنشئ مستودعاً جديداً على GitHub.
2. ارفع **محتويات هذا المجلد** إلى المستودع، وليس المجلد الأب نفسه. تأكد من رفع مجلد `.github`.
3. افتح تبويب Actions.
4. اختر `Build Free Android APK` ثم `Run workflow` إذا لم يبدأ البناء تلقائياً.
5. بعد نجاح التشغيل، افتح صفحة التشغيل ونزّل Artifact باسم `edzakh-association-apk`.
6. فك ضغط الملف المنزّل لتحصل على `app-debug.apk`، ثم انقله إلى هاتف Android وثبّته.

## البناء محلياً على الكمبيوتر

يتطلب Node.js 20 وJava 17 وAndroid Studio / Android SDK.

```bash
npm install
npx cap add android
npx cap sync android
npx cap open android
```

ثم في Android Studio اختر Build > Build Bundle(s) / APK(s) > Build APK(s).

## معلومات التطبيق

- الاسم: جمعية إدزاح إدبوكا
- App ID: `org.edzakh.idbouka.manager`
- Web directory: `www`

## تنبيهات مهمة

- يعتمد ملف HTML الحالي على مكتبات وخطوط خارجية من الإنترنت؛ لذلك يلزم اتصال بالإنترنت لتحميلها.
- إعداد Supabase يبدأ بقيم فارغة في الكود. اضبط عنوان المشروع ومفتاح anon من إعدادات السحابة داخل التطبيق قبل الاعتماد على المزامنة السحابية.
- ملف `android-resources/strings.xml` محفوظ كمرجع للموارد النصية. ينشئ Capacitor مجلد Android وملفات الموارد الخاصة به عند تنفيذ `npx cap add android`.
- ملف APK الناتج من هذا المسار هو Debug APK للتجربة والتثبيت المباشر. للنشر الرسمي والتحديثات الموقعة، أنشئ Release APK موقّعاً واحتفظ بمفتاح التوقيع بأمان.
