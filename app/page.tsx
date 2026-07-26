export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold mb-4">
          İstanbul Medeniyet Üniversitesi
        </h1>

        <h2 className="text-3xl text-blue-400 mb-6">
          Siyaset ve Bürokrasi Kulübü
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Geleceğin liderlerini, diplomatlarını ve kamu yöneticilerini
          yetiştiren öğrenci kulübüne hoş geldiniz.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-lg font-semibold">
          Etkinlikleri İncele
        </button>
      </div>
    </main>
  );
}