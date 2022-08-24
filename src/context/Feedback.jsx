import { createContext , useEffect , useState , useCallback } from "react";

export const Feedback = createContext({});

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((d) => d.json())
      .then((json) => {
        setFeedbacks(json.productRequests);
      });
  }, []);

  const handleSelectCategory = useCallback(
    (value) => {
      if (value === undefined) {
        setSelectedCategories([]);
      } else if (selectedCategories.includes(value)) {
        setSelectedCategories((prevState) =>
          prevState.filter((c) => c !== value)
        );
      } else {
        setSelectedCategories((prevState) => [...prevState, value]);
      }
    },
    [selectedCategories]
  );

  return (
    <Feedback.Provider value={{feedbacks, selectedCategories , handleSelectCategory}}>
      {children}
    </Feedback.Provider>
  );
};
