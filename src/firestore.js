import { collection, addDoc, getDocs} from "firebase/firestore";
import { db } from "./firebase";

// 出勤時刻と退勤時刻をFirestoreに追加
export async function addWorkHours() {
  try {
    const docRef = await addDoc(collection(db, "workHours"), {
      checkIn: new Date(), // 出勤時刻
      checkOut: new Date(), // 退勤時刻
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Firestoreから出勤時刻と退勤時刻を取得して表示
export async function displayWorkHours() {
  const querySnapshot = await getDocs(collection(db, "workHours"));
  querySnapshot.forEach((doc) => {
    console.log(`Check In: ${doc.data().checkIn}`);
    console.log(`Check Out: ${doc.data().checkOut}`);
  });
}