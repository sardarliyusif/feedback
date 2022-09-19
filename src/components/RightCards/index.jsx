import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { FaAngleUp, FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import map from "lodash/map";
import filter from "lodash/filter";
import { Dropdown } from "../Dropdown";
import { upvoteFeedback } from "../../redux/actions/feedback";
import { Typography, Card, Button, Chip } from "../shared";
import categories from "../../data/categories.json";
import { Sorter, sortingFunctions } from "../../data/sorting";

export const RightCards = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState(Sorter.MOST_UPVOTE);
  const feedback = useSelector((state) => state.feedback);
  const selectedCategories = useSelector((state) => state.categories);

  return (
    <div>
      <Card mode="dark" align="center" justify="between" padding="small">
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <RiLightbulbFlashLine color="#ffffff" style={{ margin: "8px" }} />
          <Typography size="large" weight="bold">
            {feedback.length} Suggestion
          </Typography>
          <Dropdown sort={sort} setSort={setSort} />
        </div>

        <Link to="feedback/create">
          <Button>
            <Typography size="small" weight="bold">
              + Add new feedback
            </Typography>
          </Button>
        </Link>
      </Card>

      {map(
        sortingFunctions[sort](
          filter(
            feedback,
            ({ category }) =>
              selectedCategories.length === 0 ||
              selectedCategories.includes(category)
          )
        ),
        ({ id, title, category, description, upvotes, selected }) => (
          <Card
            key={id}
            padding="large"
            mode="light"
            justify="between"
            align="center"
          >
            <Chip.Upvote
              onClick={() => dispatch(upvoteFeedback(id, upvotes, selected))}
              selected={selected}
            >
              <FaAngleUp /> {upvotes}
            </Chip.Upvote>
            <Link
              to={`/feedback/${id}/view`}
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                marginLeft: "40px",
              }}
            >
              <Typography.Title color="purple">{title}</Typography.Title>
              <Typography color="light" style={{ margin: "0 0 12px 0 " }}>
                {description}
              </Typography>
              <Chip>{categories.find((c) => c.value === category)?.label}</Chip>
            </Link>
            
          </Card>
        )
      )}
    </div>
  );
};
