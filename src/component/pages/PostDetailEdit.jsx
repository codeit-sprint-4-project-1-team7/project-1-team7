function PostDetailEdit() {
  return (
    <div>
      <h1>PostDetailEdit</h1>
      <div className={styles.cardListContainer}>
        <div className={styles.cardList}>
          {messages.map(({ id, sender, relationship, content, createdAt }) => (
            <Card
              key={id}
              sender={sender}
              relationship={relationship}
              content={content}
              createdAt={createdAt}
              onButtonClick={() => onDeleteButtonClick(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostDetailEdit;
