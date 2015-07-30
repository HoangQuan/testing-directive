Trong quá trình làm việc, Tôi gặp phải không ít các ticket liên quan đến Angularjs và để đảm bảo chất lượng đôi khi tôi phải viết test case cho các function của mình. Bài viết sau đây tôi sẽ chia sẻ những kiến thức mà tôi học được khi viết test cho một directive. Hi vọng nó sẽ hữu ích với bạn.

Nếu các bạn đã viết test cho Angularjs thì các bạn sẽ thấy việc viết test cho Directive có chút khó khăn hơn so với test cho controller hoặc services. Đối với Directive chúng ta cần render ra một tempate. và xác định được chính xác element mà chúng ta sẽ render trên template. Điều này sẽ được thực hiện thông qua đối tượng $complile.

Bài viết này tôi sẽ tập trung nói về việc viết test cho một driective đơn giản và test cho một function thuộc controller nằm trong directive.

Trước tiên tôi sẽ tạo ra  một Directive và sử dụng nó xuyên xuốt bài viết để viết test cho nó.
...
xem them tai https://viblo.asia/hoang.van.quan/posts/ZK1ov1ryR5b9
