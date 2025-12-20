import Book from "@/components/book";
import { useState } from "react";
import { Image, View } from "react-native";
//import mockDB from "../assets/data/mock-db.json";
import { useRouter } from "expo-router";
import BookAddBtn from "./bookaddbtn";
import NameInput from "./nameinput";

type BookItem = { id: number; name: string };
type Shop = {
  id: number;
  name: string;
  books: BookItem[];
};

type ShelfProps = {
  books: { id: number; name: string }[];
  showAddBtn: boolean;
  onPressAdd?: () => void;
};

type BooksProps = {
  shops: Shop[];
  currentShopId: number;
  onChangeShops: (shops: Shop[]) => void;
};

function Shelf({ books, showAddBtn, onPressAdd }: ShelfProps) {
  const router = useRouter();

  return (
    <View style={{ position: "relative", alignItems: "center", height: 165 }}>
      <Image
        source={require("../assets/images/shelf.png")}
        style={{ marginTop: 116, zIndex: 0, position: "absolute" }}
      ></Image>
      <View
        style={{
          position: "absolute",
          zIndex: 10,
          alignItems: "flex-start",
          width: "85%",
          top: 20,
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        {books.map((book) => (
          <Book
            key={book.id}
            name={book.name}
            onPress={() =>
              router.push({
                pathname: "/bookdetail",
                params: {
                  bookName: book.name,
                  bookId: book.id,
                },
              })
            }
          />
        ))}
        {showAddBtn && onPressAdd && <BookAddBtn onPress={onPressAdd} />}
      </View>
    </View>
  );
}

export default function Books({
  shops,
  currentShopId,
  onChangeShops,
}: BooksProps) {
  const [showInput, setShowInput] = useState(false);
  const [newBookName, setNewBookName] = useState("");

  const currentShop = shops.find((s) => s.id === currentShopId);

  if (!currentShop) return null;

  const isBooksLimitReached = currentShop.books.length >= 9;

  const shelvesBooks: { id: number; name: string }[][] = [];
  if (currentShop.books.length > 0) {
    for (let i = 0; i < currentShop.books.length; i += 3) {
      shelvesBooks.push(currentShop.books.slice(i, i + 3));
    }
  }

  const handlePressAdd = () => {
    setShowInput(true);
  };

  const handleSubmitName = () => {
    const trimmed = newBookName.trim();
    if (!trimmed) return;

    onChangeShops((prev) =>
      prev.map((shop) => {
        if (shop.id !== currentShopId) return shop;

        const nextId =
          shop.books.length > 0
            ? Math.max(...shop.books.map((b) => b.id)) + 1
            : 1;

        return {
          ...shop,
          books: [...shop.books, { id: nextId, name: trimmed }],
        };
      })
    );

    setNewBookName("");
    setShowInput(false);
  };

  if (!currentShop) return null;

  return (
    <View
      style={{
        flex: 1, // 화면 전체를 차지해야 absolute 기준이 됨
        alignItems: "center",
        width: "100%",
      }}
    >
      <View style={{ width: "90%" }}>
        {currentShop.books.length === 0 ? (
          // 책이 하나도 없으면 → 비어 있는 선반 + Add 버튼만
          <Shelf
            books={[]}
            showAddBtn={!isBooksLimitReached}
            onPressAdd={handlePressAdd}
          />
        ) : (
          <>
            {shelvesBooks.map((booksOnShelf, idx) => {
              const isLast = idx === shelvesBooks.length - 1;
              const isBooksMultipleOf3 = currentShop.books.length % 3 === 0;

              // 책 개수가 3의 배수가 아니면 → 마지막 선반에 Add 버튼
              const showAddBtnOnThisShelf = !isBooksMultipleOf3 && isLast;

              return (
                <Shelf
                  key={idx}
                  books={booksOnShelf}
                  showAddBtn={showAddBtnOnThisShelf}
                  onPressAdd={
                    showAddBtnOnThisShelf ? handlePressAdd : undefined
                  }
                />
              );
            })}

            {/* 책 개수가 3의 배수면 → 맨 아래에 "비어 있는 선반 + Add 버튼만" 추가 */}
            {currentShop.books.length % 3 === 0 && (
              <Shelf books={[]} showAddBtn={true} onPressAdd={handlePressAdd} />
            )}
          </>
        )}
      </View>

      <View
        pointerEvents={showInput ? "auto" : "none"}
        style={{
          position: "absolute",
          bottom: 500,
          left: 0,
          right: 0,
          alignItems: "center",
          zIndex: 999,
        }}
      >
        <NameInput
          hint="새로운 TakeOut(책)의 이름을 입력해주세요"
          visible={showInput}
          value={newBookName}
          onChangeText={setNewBookName}
          onSubmitEditing={handleSubmitName}
        />
      </View>
    </View>
  );
}
