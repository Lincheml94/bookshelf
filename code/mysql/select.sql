-- // SELECT category.* FROM publishinghouse_dev.category


SELECT
			category.*,
			GROUP_CONCAT(book_id) AS book_ids
			FROM
				publishinghouse_dev.category
			JOIN
				publishinghouse_dev.book_category
			ON
				book_category.category_id = category.id
			JOIN
				publishinghouse_dev.book
			ON
				book_id = book_category.book_id
			GROUP BY
				category.id;

SELECT category.*, GROUP_CONCAT(book_id) AS book_ids FROM publishinghouse_dev.category JOIN publishinghouse_dev.book_category ON book_category.category_id = category.id JOIN publishinghouse_dev.book ON book_id = book_category.book_id GROUP BY category.id;

