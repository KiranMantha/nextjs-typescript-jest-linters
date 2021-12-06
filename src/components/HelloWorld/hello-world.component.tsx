import styles from './hello-world.module.css';

function HelloWorld() {
  return (
    <>
      <h1 className={styles.center}>Hello World</h1>
      <div>
        <a href="#">
          <img src="https://cdn.pixabay.com/photo/2021/11/11/20/49/sauerland-6787215_1280.jpg" />
        </a>
      </div>
    </>
  );
}

export { HelloWorld };
