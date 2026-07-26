// encode teks agar aman di URL
export const encodeForShare = (text) => encodeURIComponent(text);

// generate link undangan
export const generateInvitationLink = (name) =>
  // name ? `https://alpi-ndah-nikahflix.vercel.app/${name.toLowerCase()}` : "";
     name
  ? `https://khitanan-1.vercel.app/${encodeURIComponent(name)}`
  : "";

// generate teks undangan lengkap
export const generateShareText = (name, invitationLink) =>
name
  ? `Kepada Yth.\n\n` +
    `Bapak/Ibu/Saudara/i *${name}*\n\n` +
    `Assalamu'alaikum Warahmatullahi Wabarakatuh\n\n` +
    `Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara Tasyakuran Khitan putra kami.\n\n` +
    `Berikut link undangan kami, untuk informasi lengkap mengenai acara dapat dilihat melalui:
    \n${invitationLink}\n\n` +
    `Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu kepada putra kami.\n\n` +
    `Acara akan diselenggarakan pada:\n` +
    `🗓️ Hari/Tanggal : Minggu, 05 Juli 2026\n` +
    `⏰ Waktu        : 08.00 WIB – selesai\n` +
    `📍 Tempat       : Kp. Halimun RT 003 RW 004, Desa Warudoyong, Kecamatan Cikalongkulon\n\n` +
    `Putra yang akan melaksanakan khitan:\n` +
    `👦 Ananda Putra Darmawan\n` +
    `Putra dari
     Bapak Darmawan & Ibu Siti\n\n` +
    `Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami ucapkan terima kasih.\n\n` +
    `Wassalamu'alaikum Warahmatullahi Wabarakatuh\n\n` +
    `Hormat kami,\n` +
    `Bapak Darmawan & Ibu Siti`
  : "";