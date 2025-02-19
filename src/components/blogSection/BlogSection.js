import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SectionContainer = styled.section`
  padding: 40px 20px;
  background-color: #1a1a1a;
  min-height: 100vh;
`;

const BlogsTitle = styled.h3`
  color: #fe5000;
  text-align: center;
  margin-bottom: 10px;
`;

const MainTitle = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 15px;
  font-size: 2.5rem;
`;

const Description = styled.p`
  color: white;
  text-align: center;
  margin-bottom: 40px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const BlogCard = styled.div`
  display: flex;
  background: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease-out;
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const CardContent = styled.div`
  padding: 20px;
  flex: 1;
`;

const Category = styled.h3`
  color: #fe5000;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const CardTitle = styled.h1`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Excerpt = styled.p`
  color: #ccc;
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      category: "React Basics",
      title: "Getting Started with React Components",
      excerpt: "Learn the fundamentals of React components and their lifecycle...",
      image: "https://picsum.photos/150/150?random=1"
    },
    {
      id: 2,
      category: "State Management",
      title: "Mastering React Hooks",
      excerpt: "A comprehensive guide to using useState and useEffect...",
      image: "https://picsum.photos/150/150?random=2"
    },
    {
      id: 3,
      category: "Performance",
      title: "Optimizing React Apps",
      excerpt: "Techniques for improving your React application's performance...",
      image: "https://picsum.photos/150/150?random=3"
    },
    {
      id: 4,
      category: "Routing",
      title: "React Router Guide",
      excerpt: "Implement navigation in your React applications with...",
      image: "https://picsum.photos/150/150?random=4"
    },
    {
      id: 5,
      category: "Styling",
      title: "CSS-in-JS Solutions",
      excerpt: "Comparing popular styling solutions for React...",
      image: "https://picsum.photos/150/150?random=5"
    },
    {
      id: 6,
      category: "Testing",
      title: "React Testing Basics",
      excerpt: "Introduction to testing React components with Jest...",
      image: "https://picsum.photos/150/150?random=6"
    }
  ];

  return (
    <SectionContainer>
      <BlogsTitle>Blogs</BlogsTitle>
      <MainTitle>News & Articles</MainTitle>
      <Description>Best Articles to get started</Description>
      
      <CardsContainer>
        {blogs.map(blog => (
          <BlogCard key={blog.id}>
            <CardImage src={blog.image} alt={blog.title} />
            <CardContent>
              <Category>{blog.category}</Category>
              <CardTitle>{blog.title}</CardTitle>
              <Excerpt>{blog.excerpt}</Excerpt>
            </CardContent>
          </BlogCard>
        ))}
      </CardsContainer>
    </SectionContainer>
  );
};

export default BlogSection;