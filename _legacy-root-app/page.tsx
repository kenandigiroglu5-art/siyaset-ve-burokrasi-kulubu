export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          İstanbul Medeniyet Üniversitesi
        </h1>

        <h2 className="text-3xl md:text-4xl text-blue-400 font-semibold mb-6">
          Siyaset ve Bürokrasi Kulübü
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Geleceğin liderlerini, diplomatlarını ve kamu yöneticilerini
          yetiştiren öğrenci kulübüne hoş geldiniz.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-xl text-lg font-semibold">
          Etkinlikleri İncele
        </button>

      </div>
    </main>
  );
}